package com.example.backend.Services.Impl;

import com.example.backend.Dao.UserAuctionMappingDao;
import com.example.backend.Entities.UserAuctionMapping;
import com.example.backend.Services.UserAuctionMappingServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAuctionMappingServiceImpl implements UserAuctionMappingServices {
    @Autowired
    private UserAuctionMappingDao userAuctionMappingDao;
    @Override
    public UserAuctionMapping saveUserAuctionMapping(UserAuctionMapping userAuctionMapping) {
        try{
            userAuctionMappingDao.save(userAuctionMapping);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
        return userAuctionMapping;
    }
}
