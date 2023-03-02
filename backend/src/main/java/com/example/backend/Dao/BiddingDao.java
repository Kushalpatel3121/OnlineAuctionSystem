package com.example.backend.Dao;

import com.example.backend.Entities.Bidding;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BiddingDao extends JpaRepository<Bidding, Integer> {
}
