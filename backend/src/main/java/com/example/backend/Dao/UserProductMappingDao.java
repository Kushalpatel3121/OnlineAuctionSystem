package com.example.backend.Dao;

import com.example.backend.Entities.UserAuctionMapping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProductMappingDao extends JpaRepository<UserAuctionMapping, Integer> {
}
