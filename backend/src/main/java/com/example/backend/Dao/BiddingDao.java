package com.example.backend.Dao;

import com.example.backend.Entities.Auction;
import com.example.backend.Entities.Bidding;
import com.example.backend.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BiddingDao extends JpaRepository<Bidding, Integer> {
    public Bidding getByProduct(Product product);
    public List<Bidding> findAllByProduct(Product product);
}
