package com.example.backend.Controller;

import com.example.backend.Services.AuctionServices;
import com.example.backend.Services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SocketController {

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
    public ResponseEntity bidToProduct(@DestinationVariable int auctionId, @DestinationVariable int productId)
    {

        return ResponseEntity.ok("Testing");
    }


}
