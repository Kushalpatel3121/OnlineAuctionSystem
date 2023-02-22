package com.example.backend.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SocketController {

    @MessageMapping("/test/{id}")
    @SendTo("/topic/return-to/{id}")
    public ResponseEntity testing(@DestinationVariable int id)
    {
        System.out.println(id);
        return ResponseEntity.ok("Test successful");
    }

    @MessageMapping("/{auctionId}/{productId}")
    public ResponseEntity bidToProduct()
    {

        return ResponseEntity.ok("Testing");
    }


}
