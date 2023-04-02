package com.example.backend.Entities;

import jakarta.persistence.*;

@Entity
public class CloseBid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int bidAmount;
    @ManyToOne
    private Product product;

    @ManyToOne
    private UserEntity userEntity;

    public CloseBid() {
    }

    public CloseBid(int id, int bidAmount, Product product, UserEntity userEntity) {
        this.id = id;
        this.bidAmount = bidAmount;
        this.product = product;
        this.userEntity = userEntity;
    }

    public int getBidAmount() {
        return bidAmount;
    }

    public void setBidAmount(int bidAmount) {
        this.bidAmount = bidAmount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }
    @Override
    public String toString() {
        return "CloseBid{" +
                "id=" + id +
                ", bidAmount=" + bidAmount +
                ", product=" + product +
                ", userEntity=" + userEntity +
                '}';
    }
}
