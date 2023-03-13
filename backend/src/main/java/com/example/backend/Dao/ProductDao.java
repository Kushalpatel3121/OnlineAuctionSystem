package com.example.backend.Dao;

import com.example.backend.Entities.Auction;
import com.example.backend.Entities.Product;
import com.example.backend.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.parameters.P;

public interface ProductDao extends JpaRepository<Product, Integer> {
    public Product findByAuction(Auction auction);
}
