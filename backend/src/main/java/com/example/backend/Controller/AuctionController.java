package com.example.backend.Controller;

import com.example.backend.Dto.AuctionProductDto;
import com.example.backend.Entities.*;
import com.example.backend.Helper.FileUploadHelper;
import com.example.backend.Services.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    private UserAuctionMappingServices userAuctionMappingServices;
    @Autowired
    private FileUploadHelper fileUploadHelper;

    @PostMapping("/create-auction/{userId}")
    public ResponseEntity createAuction(@PathVariable int userId, @RequestParam("productImage") MultipartFile file,
                                                 @RequestParam("auctionProductData") String auctionProductData)
            throws JsonProcessingException {

        ObjectMapper objectMapper = new ObjectMapper();
        AuctionProductDto auctionProductDto = objectMapper.readValue(auctionProductData, AuctionProductDto.class);


        auctionProductDto.changeDate();
        Auction auction = auctionProductDto.getAuction();

        ResponseEntity response = fileUploadHelper.uploadFile(file);

        if(response.getStatusCode() == HttpStatus.BAD_REQUEST)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Upload image file only");

        auctionServices.saveAuction(auction);
        Product product = auctionProductDto.getProduct(fileUploadHelper.fileName, auction);


        UserEntity userEntity = userServices.getUserById(userId);

        product.setUserEntity(userEntity);
        productServices.saveProduct(product);

        Bidding bidding = new Bidding();
        bidding.setCurrentBid(product.getBasePrice());
        bidding.setProduct(product);
        bidding.setUserEntity(userEntity);
        biddingService.saveBidding(bidding);

        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/register-user/{userId}/{auctionId}")
    public ResponseEntity registerForAuction(@PathVariable int auctionId, @PathVariable int userId)
    {
        UserEntity userEntity;
        userEntity = userServices.getUserById(userId);

        if(userEntity == null)
            return ResponseEntity.status(401).body("User not found");

        Auction auction = auctionServices.getAuctionById(auctionId);

        if(auction == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Auction not found");

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

    @GetMapping("{id}")
    public ResponseEntity getAuction(@PathVariable int id)
    {
        Auction auction = auctionServices.getAuctionById(id);
        return new ResponseEntity(auction, HttpStatus.OK);
    }

    @GetMapping("product/{id}")
    public ResponseEntity getProduct(@PathVariable int id)
    {
        Product product = productServices.getProductById(id);
        return new ResponseEntity(product, HttpStatus.OK);
    }
}
