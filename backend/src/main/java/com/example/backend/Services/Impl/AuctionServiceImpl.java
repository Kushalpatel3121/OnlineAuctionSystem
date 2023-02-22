package com.example.backend.Services.Impl;

import com.example.backend.Dao.AuctionDao;
import com.example.backend.Entities.Auction;
import com.example.backend.Services.AuctionServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
