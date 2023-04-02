package com.example.backend.Controller;
import com.example.backend.Dto.CloseBidRequestDto;
import com.example.backend.Dto.CloseBidResponse;
import com.example.backend.Entities.*;
import com.example.backend.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/bidding")
@CrossOrigin("*")
public class BiddingController {
    @Autowired
    private BiddingService biddingService;
    @Autowired
    private CloseBidServices closeBidServices;
    @Autowired
    private AuctionServices auctionServices;
    @Autowired
    private ProductServices productServices;
    @Autowired
    private UserServices userServices;

    @GetMapping("/get-initial/{productId}")
    public ResponseEntity getInitialBid(@PathVariable int productId)
    {
        List<Bidding> bidding = biddingService.getByProductId(productId);
        return ResponseEntity.ok(bidding);
    }

    @GetMapping("/get-close/{productId}/{userId}")
    public ResponseEntity getCloseBid(@PathVariable int productId,
                                       @PathVariable int userId)
    {
        CloseBid closeBid = closeBidServices.getByUserIdAndProductId(userId,productId);
        Boolean check = false;
        if(closeBid != null)
            check = true;
        CloseBidResponse response = new CloseBidResponse();
        response.setCloseBid(closeBid);
        response.setData(check);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/make-close/{productId}/{userId}")
    public ResponseEntity makeCloseBid(@PathVariable int productId,
                                       @PathVariable int userId, @RequestBody CloseBidRequestDto bidDto)
    {
        System.out.println(bidDto.getBid());
        int bid = bidDto.getBid();
        UserEntity userEntity = userServices.getUserById(userId);
        Product product = productServices.getProductById(productId);
        CloseBid closeBid = new CloseBid();
        closeBid.setBidAmount(bid);
        closeBid.setProduct(product);
        closeBid.setUserEntity(userEntity);
        closeBidServices.saveCloseBid(closeBid);
        return ResponseEntity.ok(closeBid);
    }

    @GetMapping("close/get-all-bid/{productId}")
    public ResponseEntity getAllCloseBids(@PathVariable int productId)
    {
        List<CloseBid> closeBids = closeBidServices.getAllByProduct(productId);
        Collections.reverse(closeBids);
        return ResponseEntity.ok(closeBids);
    }
}
