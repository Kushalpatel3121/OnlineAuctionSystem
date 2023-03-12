package com.example.backend.Controller;

import com.example.backend.Entities.Auction;
import com.example.backend.Entities.Bidding;
import com.example.backend.Entities.CloseBid;
import com.example.backend.Services.AuctionServices;
import com.example.backend.Services.BiddingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/bidding")
public class BiddingController {
    @Autowired
    private BiddingService biddingService;

    @GetMapping("/live/{productId}")
    public ResponseEntity getInitialBid(@PathVariable int productId)
    {
        Bidding bidding = biddingService.getByProductId(productId);
        return ResponseEntity.ok(bidding);
    }

    @PostMapping("/close/{productId}")
    public ResponseEntity makeCloseBid(@RequestBody CloseBid closeBid)
    {

        return ResponseEntity.ok("Success");
    }
}
