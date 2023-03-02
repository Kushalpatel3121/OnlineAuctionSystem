package com.example.backend.Services;

import com.example.backend.Entities.Bidding;

public interface BiddingService {
    public Bidding saveBidding(Bidding bidding);
    public Bidding getBiddingById(int id);
    public Bidding updateBid(Bidding bidding);
}
