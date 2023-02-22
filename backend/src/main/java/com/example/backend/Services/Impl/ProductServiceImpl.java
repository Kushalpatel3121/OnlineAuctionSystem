package com.example.backend.Services.Impl;

import com.example.backend.Dao.ProductDao;
import com.example.backend.Entities.Product;
import com.example.backend.Services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductServices{
    @Autowired
    private ProductDao productDao;

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
}
