package com.example.backend.Services;

import com.example.backend.Entities.Auction;
import com.example.backend.Entities.Product;



public interface ProductServices {
    public Product saveProduct(Product product);
    public Product getProductById(int id);
    public Product getProductByAuction(Auction auction);
}
