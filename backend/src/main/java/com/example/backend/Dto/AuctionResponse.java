package com.example.backend.Dto;

import com.example.backend.Entities.Product;

public class AuctionResponse {
    private int id;
    private String name;
    private String type;
    private String category;
    private String startingDate;
    private String endingDate;
    private Product product;

    public AuctionResponse(int id, String name, String type, String category, String startingDate, String endingDate, Product product) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.category = category;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.product = product;
    }

    public AuctionResponse() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStartingDate() {
        return startingDate;
    }

    public void setStartingDate(String startingDate) {
        this.startingDate = startingDate;
    }

    public String getEndingDate() {
        return endingDate;
    }

    public void setEndingDate(String endingDate) {
        this.endingDate = endingDate;
    }
}
