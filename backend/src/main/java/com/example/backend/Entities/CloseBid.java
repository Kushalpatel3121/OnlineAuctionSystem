package com.example.backend.Entities;

import jakarta.persistence.*;

@Entity
public class CloseBid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Auction auction;

    @ManyToOne
    private UserEntity userEntity;

    public CloseBid() {
    }

    public CloseBid(int id, Auction auction, UserEntity userEntity) {
        this.id = id;
        this.auction = auction;
        this.userEntity = userEntity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Auction getAuction() {
        return auction;
    }

    public void setAuction(Auction auction) {
        this.auction = auction;
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
                ", auction=" + auction +
                ", userEntity=" + userEntity +
                '}';
    }
}
