package com.example.backend.Services.Impl;

import com.example.backend.Dao.AuctionDao;
import com.example.backend.Entities.Auction;
import com.example.backend.Entities.UserEntity;
import com.example.backend.Services.AuctionServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuctionServiceImpl implements AuctionServices {
    @Autowired
    private AuctionDao auctionDao;
    @Override
    public Auction saveAuction(Auction auction) {
        try{
            auctionDao.save(auction);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
        return auction;
    }

    @Override
    public Auction getAuctionById(int id) {
        Auction auction;
        try{
            auction = auctionDao.getAuctionById(id);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
        return auction;
    }

    @Override
    public Auction incrementRegistration(Auction auction) {
        try {
            auction.setNoOfRegistration(auction.getNoOfRegistration() + 1);
            auctionDao.save(auction);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
        return auction;
    }

    @Override
    public List<Auction> getAllAuctions() {
        List<Auction> auctions = auctionDao.findAllByIsCompleted(false);
        return auctions;
    }

    @Override
    public List<Auction> getAllCompletedAuctions()
    {
        List<Auction> auctions = auctionDao.findAllByIsCompleted(true);
        return auctions;
    }


    @Override
    public List<Auction> getAllOfUser(UserEntity userEntity) {
        List<Auction> auctions = auctionDao.findAllByUserEntity(userEntity);
        return auctions;
    }

}
