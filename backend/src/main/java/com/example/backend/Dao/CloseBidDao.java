package com.example.backend.Dao;

import com.example.backend.Entities.CloseBid;
import com.example.backend.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CloseBidDao extends JpaRepository<CloseBid, Integer> {
    public List<CloseBid> findAllByProduct(Product product);


}
