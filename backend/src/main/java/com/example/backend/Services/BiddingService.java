package com.example.backend.Services;

import com.example.backend.Entities.Bidding;

import java.util.List;

public interface BiddingService {
    public Bidding saveBidding(Bidding bidding);
    public Bidding getBiddingById(int id);
    public Bidding updateBid(Bidding bidding);
    public List<Bidding> getByProductId(int productId);

}
