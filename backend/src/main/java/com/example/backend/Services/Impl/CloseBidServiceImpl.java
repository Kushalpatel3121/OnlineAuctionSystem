package com.example.backend.Services.Impl;

import com.example.backend.Dao.AuctionDao;
import com.example.backend.Dao.CloseBidDao;
import com.example.backend.Dao.ProductDao;
import com.example.backend.Dao.UserDao;
import com.example.backend.Entities.Auction;
import com.example.backend.Entities.CloseBid;
import com.example.backend.Entities.Product;
import com.example.backend.Services.CloseBidServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CloseBidServiceImpl implements CloseBidServices {
    @Autowired
    private CloseBidDao closeBidDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private ProductDao productDao;
    @Autowired
    private AuctionDao auctionDao;

    @Override
    public CloseBid saveCloseBid(CloseBid closeBid) {
        try{
            closeBidDao.save(closeBid);
            return closeBid;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    public CloseBid getByUserIdAndProductId(int userId, int productId) {
        try{
            Product product = productDao.findById(productId).get();
            List<CloseBid> closeBids = closeBidDao.findAllByProduct(product);
            for(CloseBid closeBid : closeBids)
            {
                if(closeBid.getUserEntity().getId() == userId)
                    return closeBid;
            }
            return null;
        }
        catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    public List<CloseBid> getAllByProduct(int productId) {
        try {
            Product product = productDao.findById(productId).get();
            List<CloseBid> closeBids = closeBidDao.findAllByProduct(product);
            return closeBids;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
    }
}
