package com.example.backend.Services.Impl;

import com.example.backend.Dao.AuctionDao;
import com.example.backend.Dao.BiddingDao;
import com.example.backend.Dao.ProductDao;
import com.example.backend.Entities.Auction;
import com.example.backend.Entities.Bidding;
import com.example.backend.Entities.Product;
import com.example.backend.Services.BiddingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BiddingServiceImpl implements BiddingService {
    @Autowired
    private BiddingDao biddingDao;
    @Autowired
    private ProductDao productDao;
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

    @Override
    public List<Bidding> getByProductId(int productId) {
        try{
            Product product = productDao.findById(productId).get();
            List<Bidding> biddings = biddingDao.findAllByProduct(product);
            return biddings;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
    }
}
