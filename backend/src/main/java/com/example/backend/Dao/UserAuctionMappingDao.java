package com.example.backend.Dao;

import com.example.backend.Entities.UserAuctionMapping;
import com.example.backend.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAuctionMappingDao extends JpaRepository<UserAuctionMapping, Integer> {
    public UserAuctionMapping findUserAuctionMappingByUserEntity(UserEntity userEntity);
}
