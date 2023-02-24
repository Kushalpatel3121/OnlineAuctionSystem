package com.example.backend.Services;

import com.example.backend.Entities.UserAuctionMapping;



public interface UserAuctionMappingServices {
    public UserAuctionMapping saveUserAuctionMapping(UserAuctionMapping userAuctionMapping);
    public Boolean isAlreadyRegister(int userId, int auctionId);
}
