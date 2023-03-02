package com.example.backend.Services.Impl;

import com.example.backend.Dao.BiddingDao;
import com.example.backend.Entities.Bidding;
import com.example.backend.Services.BiddingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BiddingServiceImpl implements BiddingService {
    @Autowired
    private BiddingDao biddingDao;
    @Override
    public Bidding saveBidding(Bidding bidding) {
        try{
            biddingDao.save(bidding);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
        return bidding;
    }
    @Override
    public Bidding getBiddingById(int id)
    {
        Bidding bidding;
        try {
            bidding = biddingDao.findById(id).get();
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
        return bidding;
    }
    @Override
    public Bidding updateBid(Bidding bidding)
    {
        try{
            biddingDao.save(bidding);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
        return bidding;
    }
}
