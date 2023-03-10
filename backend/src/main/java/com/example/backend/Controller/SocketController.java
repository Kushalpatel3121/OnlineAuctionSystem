package com.example.backend.Controller;


import com.example.backend.Entities.Bidding;
import com.example.backend.Services.AuctionServices;
import com.example.backend.Services.BiddingService;
import com.example.backend.Services.ProductServices;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SocketController {
    @Autowired
    private BiddingService biddingService;

    @Autowired
    private ProductServices productServices;
    @Autowired
    private AuctionServices auctionServices;

    @MessageMapping("/test/{id}")
    @SendTo("/topic/return-to/{id}")
    public ResponseEntity testing(@DestinationVariable int id)
    {
        System.out.println(id);
        return ResponseEntity.ok("Test successful");
    }

    @MessageMapping("/{auctionId}/{productId}")
    @SendTo("/topic/return-to/{auctionId}/{productId}")
    public ResponseEntity bid(@DestinationVariable int auctionId, @DestinationVariable int productId,
                              @RequestBody Bidding bidding) throws JsonProcessingException {
//        biddingService.updateBid(bidding);
//        System.out.println(bidding);
        return ResponseEntity.ok(bidding);
    }

}
