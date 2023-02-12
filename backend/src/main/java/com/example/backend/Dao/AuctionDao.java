package com.example.backend.Dao;


import com.example.backend.Entities.Auction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuctionDao extends JpaRepository<Auction, Integer> {
}
