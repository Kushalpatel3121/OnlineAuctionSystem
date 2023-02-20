package com.example.backend.Controller;

import com.example.backend.Dao.AuctionDao;
import com.example.backend.Dao.ProductDao;
import com.example.backend.Dao.UserDao;
import com.example.backend.Dto.AuctionProductDto;
import com.example.backend.Entities.Auction;
import com.example.backend.Entities.Product;
import com.example.backend.Entities.UserEntity;
import com.example.backend.Helper.FileUploadHelper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@RestController
@RequestMapping("/auction")
@CrossOrigin("*")
public class AuctionController {

    @Autowired
    private AuctionDao auctionDao;
    @Autowired
    private ProductDao productDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private FileUploadHelper fileUploadHelper;

    @PostMapping("/create-auction")
    public ResponseEntity<Product> createAuction(@RequestParam("productImage") MultipartFile file,
                                                 @RequestParam("auctionProductData") String auctionProductData) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        AuctionProductDto auctionProductDto = objectMapper.readValue(auctionProductData, AuctionProductDto.class);
        auctionProductDto.changeDate();
        Auction auction = auctionProductDto.getAuction();

        auctionDao.save(auction);

        fileUploadHelper.uploadFile(file);
        Product product = auctionProductDto.getProduct(fileUploadHelper.fileName, auction);

        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        UserEntity userEntity;
        userEntity = userDao.getByUsername(username);

        if(userEntity == null)
            return ResponseEntity.status(401).body(product);

        product.setUserEntity(userEntity);
        productDao.save(product);

        return new ResponseEntity<>(product, HttpStatus.OK);
    }
}
