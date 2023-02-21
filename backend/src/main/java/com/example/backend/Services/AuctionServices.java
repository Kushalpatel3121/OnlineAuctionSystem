package com.example.backend.Services;

import com.example.backend.Entities.Auction;



public interface AuctionServices {
    public Auction saveAuction(Auction auction);
    public Auction getAuctionById(int id);
}
