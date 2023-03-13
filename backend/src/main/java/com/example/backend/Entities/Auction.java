package com.example.backend.Entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Auction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String type;
    private Date startingDate;
    private Date endingDate;
    private int noOfProducts;
    private int noOfRegistration;
    private Boolean isCompleted = false;
    @ManyToOne
    @JoinColumn(name = "created-by")
    private UserEntity userEntity;
    public Auction() {}

    public Auction(int id, String name, String type, Date startingDate, Date endingDate,int noOfProducts, int noOfRegistration, Boolean isCompleted) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.noOfProducts = noOfProducts;
        this.noOfRegistration = noOfRegistration;
        this.isCompleted = isCompleted;
    }

    public Boolean getCompleted() {
        return isCompleted;
    }

    public void setCompleted(Boolean completed) {
        isCompleted = completed;
    }

    public int getNoOfProducts() {
        return noOfProducts;
    }

    public void setNoOfProducts(int noOfProducts) {
        this.noOfProducts = noOfProducts;
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

    public Date getStartingDate() {
        return startingDate;
    }

    public void setStartingDate(Date startingDate) {
        this.startingDate = startingDate;
    }

    public Date getEndingDate() {
        return endingDate;
    }

    public void setEndingDate(Date endingDate) {
        this.endingDate = endingDate;
    }

    public int getNoOfRegistration() {
        return noOfRegistration;
    }

    public void setNoOfRegistration(int noOfRegistration) {
        this.noOfRegistration = noOfRegistration;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }

    @Override
    public String toString() {
        return "Auction{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", startingDate=" + startingDate +
                ", endingDate=" + endingDate +
                ", noOfProducts=" + noOfProducts +
                ", noOfRegistration=" + noOfRegistration +
                ", userEntity=" + userEntity +
                '}';
    }
}
