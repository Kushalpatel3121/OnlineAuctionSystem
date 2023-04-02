package com.example.backend.Controller;
import com.example.backend.Dto.AuctionProductDto;
import com.example.backend.Dto.AuctionResponse;
import com.example.backend.Entities.*;
import com.example.backend.Helper.FileUploadHelper;
import com.example.backend.Security.TokenGenerator;
import com.example.backend.Services.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@RestController
@RequestMapping("/auction")
@CrossOrigin("*")
public class AuctionController {
    @Autowired
    private UserServices userServices;
    @Autowired
    private AuctionServices auctionServices;
    @Autowired
    private ProductServices productServices;
    @Autowired
    private BiddingService biddingService;
    @Autowired
    private UpdateServices updateServices;
    @Autowired
    private UserAuctionMappingServices userAuctionMappingServices;
    @Autowired
    private FileUploadHelper fileUploadHelper;
    @Autowired
    private TokenGenerator tokenGenerator;

    public UserEntity getUserFromToken(String token)
    {
        UserEntity userEntity;
        token = token.substring(7);
        userEntity = userServices.findUserByUsername(tokenGenerator.getUserFromJwt(token));
        return userEntity;
    }

    @PostMapping("/create-auction/{userId}")
    public ResponseEntity createAuction(@PathVariable int userId, @RequestParam("productImage") MultipartFile file,
                                                 @RequestParam("auctionProductData") String auctionProductData)
            throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        AuctionProductDto auctionProductDto = objectMapper.readValue(auctionProductData, AuctionProductDto.class);

        auctionProductDto.changeDate();
        Auction auction = auctionProductDto.getAuction();
        UserEntity userEntity = userServices.getUserById(userId);
        if(userEntity == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not exist");

        auction.setUserEntity(userEntity);

        ResponseEntity response = fileUploadHelper.uploadFile(file);

        if(response.getStatusCode() == HttpStatus.BAD_REQUEST)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Upload image file only");

        auctionServices.saveAuction(auction);
        Product product = auctionProductDto.getProduct(fileUploadHelper.fileName, auction);

        productServices.saveProduct(product);

        Bidding bidding = new Bidding();
        bidding.setCurrentBid(product.getBasePrice());
        bidding.setProduct(product);
        bidding.setUserEntity(userEntity);
        biddingService.saveBidding(bidding);

        String title = "New Auction Released";
        String des = auction.getType() + " has been created by " + userEntity.getUsername();
        Updates updates = new Updates(title, des, new Date());
        updateServices.addUpdate(updates);
        
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/register-user/{auctionId}/{userId}")
    public ResponseEntity registerForAuction(@PathVariable int auctionId, @PathVariable int userId)
    {
        UserEntity userEntity;
        userEntity = userServices.getUserById(userId);

        if(userEntity == null)
            return ResponseEntity.status(401).body("User not found");

        Auction auction = auctionServices.getAuctionById(auctionId);

        if(auction == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Auction not found");

        if(auction.getUserEntity() == userEntity)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You are auction creator");

        if(userAuctionMappingServices.isAlreadyRegister(userId, auctionId))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already registered");
        }

        UserAuctionMapping userAuctionMapping = new UserAuctionMapping();
        userAuctionMapping.setUserEntity(userEntity);
        userAuctionMapping.setAuction(auction);

        userAuctionMappingServices.saveUserAuctionMapping(userAuctionMapping);
        auctionServices.incrementRegistration(auction);


        return ResponseEntity.ok("Registration successful");
    }

    @GetMapping("/check-reg/{userId}/{auctionId}")
    public ResponseEntity<Boolean> checkRegistration(@PathVariable int userId, @PathVariable int auctionId)
    {
        Boolean result = userAuctionMappingServices.isAlreadyRegister(userId, auctionId);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/get-all-user/{auctionId}")
    public ResponseEntity getRegisteredUser(@PathVariable int auctionId)
    {
        List<UserEntity> userEntities = userAuctionMappingServices.getAllRegisteredUser(auctionId);
        return ResponseEntity.ok(userEntities);
    }

    @GetMapping("/get-numbers")
    public ResponseEntity totalNumberOfAuctions()
    {
        int count = 0;
        List<Auction> auctions = auctionServices.getAllAuctions();
        count += auctions.size();
        auctions = auctionServices.getAllCompletedAuctions();
        count += auctions.size();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/get-numbers-user")
    public ResponseEntity totalOfYours(@RequestHeader("Authorization") String token)
    {
        UserEntity userEntity = getUserFromToken(token);
        List<Auction> auctions = auctionServices.getAllOfUser(userEntity);
        return ResponseEntity.ok(auctions.size());
    }

    @GetMapping("/get-all")
    public ResponseEntity getAllAuctions()
    {
        List<Auction> auctions = auctionServices.getAllAuctions();
        List<AuctionResponse> auctionResponses = new ArrayList<>();
        Collections.sort(auctions);
        for(Auction auction: auctions)
        {
            Product product = productServices.getProductByAuction(auction);

            String startDate = auction.getStartingDate().getDate() + "/" + (auction.getStartingDate().getMonth() + 1) + "/" + (auction.getStartingDate().getYear() + 1900);

            String endDate =(auction.getType().equals("Live Auction"))? "Until Auction is running" :auction.getEndingDate().getDate() + "/" + (auction.getEndingDate().getMonth() + 1) + "/" + (auction.getEndingDate().getYear() + 1900);

            AuctionResponse auctionResponse = new AuctionResponse(auction.getId(), auction.getName(), auction.getType(), product.getCategory(),startDate, endDate, product);

            auctionResponses.add(auctionResponse);
        }
        return ResponseEntity.ok(auctionResponses);
    }

    @GetMapping("/get-all-completed")
    public ResponseEntity getAllCompletedAuctions()
    {
        List<Auction> auctions = auctionServices.getAllCompletedAuctions();
        List<AuctionResponse> auctionResponses = new ArrayList<>();
        Collections.sort(auctions);
        for(Auction auction: auctions)
        {
            Product product = productServices.getProductByAuction(auction);

            String startDate = auction.getStartingDate().getDate() + "/" + (auction.getStartingDate().getMonth() + 1) + "/" + (auction.getStartingDate().getYear() + 1900);

            String endDate =(auction.getType().equals("Live Auction"))? "Until Auction is running" :auction.getEndingDate().getDate() + "/" + (auction.getEndingDate().getMonth() + 1) + "/" + (auction.getEndingDate().getYear() + 1900);

            AuctionResponse auctionResponse = new AuctionResponse(auction.getId(), auction.getName(), auction.getType(), product.getCategory(),startDate, endDate, product);

            auctionResponses.add(auctionResponse);
        }
        return ResponseEntity.ok(auctionResponses);
    }

    @GetMapping("/get-all-registered")
    public ResponseEntity getTotalRegisteredAuction(@RequestHeader("Authorization") String token)
    {
        UserEntity userEntity = getUserFromToken(token);
        List<Product> products = userAuctionMappingServices.getAllRegistered(userEntity);
        return ResponseEntity.ok(products.size());
    }

    @RequestMapping("get-by-id/{auctionId}")
    public ResponseEntity getAuctionById(@PathVariable int auctionId)
    {
        Auction auction = auctionServices.getAuctionById(auctionId);
        return ResponseEntity.ok(auction);
    }

    @GetMapping("change-status/{auctionId}")
    public ResponseEntity changeStatus(@PathVariable int auctionId)
    {
        Auction auction = auctionServices.getAuctionById(auctionId);
        auction.setCompleted(true);
        auctionServices.saveAuction(auction);
        return ResponseEntity.ok(auction);
    }
}