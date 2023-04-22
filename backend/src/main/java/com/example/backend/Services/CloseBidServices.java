package com.example.backend.Services;

import com.example.backend.Entities.CloseBid;
import com.example.backend.Entities.Product;

import java.util.List;

public interface CloseBidServices {
    public CloseBid saveCloseBid(CloseBid closeBid);
    public CloseBid getByUserIdAndProductId(int userId, int productId);
    public List<CloseBid> getAllByProduct(int productId);
}
