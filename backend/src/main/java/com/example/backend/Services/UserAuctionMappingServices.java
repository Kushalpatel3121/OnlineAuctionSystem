package com.example.backend.Services;

import com.example.backend.Entities.Auction;
import com.example.backend.Entities.Product;
import com.example.backend.Entities.UserAuctionMapping;
import com.example.backend.Entities.UserEntity;

import java.util.List;


public interface UserAuctionMappingServices {
    public UserAuctionMapping saveUserAuctionMapping(UserAuctionMapping userAuctionMapping);
    public Boolean isAlreadyRegister(int userId, int auctionId);
    public List<UserEntity> getAllRegisteredUser(int auctionID);
    public List<Product> getAllRegistered(UserEntity userEntity);
}
