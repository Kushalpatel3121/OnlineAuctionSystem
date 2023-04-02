package com.example.backend.Dao;


import com.example.backend.Entities.Auction;
import com.example.backend.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuctionDao extends JpaRepository<Auction, Integer> {
    public Auction getAuctionById(int id);
    public List<Auction> findAllByUserEntity(UserEntity userEntity);
    public List<Auction> findAllByIsCompleted(Boolean isCompleted);
}
