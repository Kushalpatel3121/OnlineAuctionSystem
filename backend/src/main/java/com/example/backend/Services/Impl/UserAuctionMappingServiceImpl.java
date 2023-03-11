package com.example.backend.Services.Impl;

import com.example.backend.Dao.AuctionDao;
import com.example.backend.Dao.UserAuctionMappingDao;
import com.example.backend.Dao.UserDao;
import com.example.backend.Entities.Auction;
import com.example.backend.Entities.UserAuctionMapping;
import com.example.backend.Entities.UserEntity;
import com.example.backend.Services.UserAuctionMappingServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserAuctionMappingServiceImpl implements UserAuctionMappingServices {
    @Autowired
    private UserAuctionMappingDao userAuctionMappingDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private AuctionDao auctionDao;

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

    @Override
    public Boolean isAlreadyRegister(int userId, int auctionId) {
        UserEntity userEntity = userDao.getById(userId);
        List<UserAuctionMapping> userAuctionMappings = userAuctionMappingDao.findAllByUserEntity(userEntity);
        for (UserAuctionMapping uamap: userAuctionMappings) {

            if(uamap.getAuction().getId() == auctionId)
            {
                return Boolean.TRUE;
            }
        }

        return Boolean.FALSE;
    }

    @Override
    public List<UserEntity> getAllRegisteredUser(int auctionID) {
        List<UserEntity> userEntities = new ArrayList<>();
        try{
            Auction auction = auctionDao.getAuctionById(auctionID);
            List<UserAuctionMapping> userAuctionMappingList = userAuctionMappingDao.findAllByAuction(auction);

            for(UserAuctionMapping item : userAuctionMappingList)
            {
                userEntities.add(item.getUserEntity());
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
        return userEntities;
    }
}
