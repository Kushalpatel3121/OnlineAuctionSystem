package com.example.backend.Dto;

import com.example.backend.Entities.Auction;
import com.example.backend.Entities.Product;
import com.example.backend.Entities.UserEntity;

public class BiddingDto {
    public Product product;
    public int currentBid;
    public UserEntity userEntity;

    @Override
    public String toString() {
        return "BiddingDto{" +
                "product=" + product +
                ", currentBid=" + currentBid +
                ", userEntity=" + userEntity +
                '}';
    }
}
