package com.example.backend.Services;

import com.example.backend.Entities.Auction;
import com.example.backend.Entities.UserEntity;

import java.util.List;


public interface AuctionServices {
    public Auction saveAuction(Auction auction);
    public Auction getAuctionById(int id);
    public Auction incrementRegistration(Auction auction);
    public List<Auction> getAllAuctions();
    public List<Auction> getAllOfUser(UserEntity userEntity);
}
