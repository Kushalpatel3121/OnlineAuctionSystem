package com.example.backend.Controller;

import com.example.backend.Entities.Product;
import com.example.backend.Services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private ProductServices productServices;

    @GetMapping("get-product/{id}")
    public ResponseEntity getProduct(@PathVariable int id)
    {
        Product product = productServices.getProductById(id);
        return new ResponseEntity(product, HttpStatus.OK);
    }
}
