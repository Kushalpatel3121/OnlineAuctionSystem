package com.example.backend.Entities;

import jakarta.persistence.*;

@Entity
public class Bidding {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int currentBid;
    @ManyToOne
    @JoinColumn(name = "bid_by")
    private UserEntity userEntity;
    @ManyToOne
    @JoinColumn(name = "bid_on")
    private Product product;

    @Override
    public String toString() {
        return "Bidding{" +
                "id=" + id +
                ", currentBid=" + currentBid +
                ", userEntity=" + userEntity +
                ", product=" + product +
                '}';
    }

    public Bidding() {
    }

    public Bidding(int currentBid, UserEntity userEntity, Product product) {
        this.currentBid = currentBid;
        this.userEntity = userEntity;
        this.product = product;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCurrentBid() {
        return currentBid;
    }

    public void setCurrentBid(int currentBid) {
        this.currentBid = currentBid;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
