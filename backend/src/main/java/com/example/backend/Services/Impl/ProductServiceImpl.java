package com.example.backend.Services.Impl;

import com.example.backend.Dao.AuctionDao;
import com.example.backend.Dao.ProductDao;
import com.example.backend.Entities.Auction;
import com.example.backend.Entities.Product;
import com.example.backend.Services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductServices{
    @Autowired
    private ProductDao productDao;
    @Autowired
    private AuctionDao auctionDao;

    public Product saveProduct(Product product)
    {
        try{
            productDao.save(product);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
        return product;
    }

    @Override
    public Product getProductById(int id) {
        Product product;
        try{
            product = productDao.findById(id).get();
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
        return product;
    }

    @Override
    public Product getProductByAuction(Auction auction) {
        try{
            Product product = productDao.findByAuction(auction);
            return product;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    public Product getProductByAuctionId(int auctionId) {
        try{
            Auction auction = auctionDao.getAuctionById(auctionId);
            Product product = getProductByAuction(auction);
            return product;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
    }
}
