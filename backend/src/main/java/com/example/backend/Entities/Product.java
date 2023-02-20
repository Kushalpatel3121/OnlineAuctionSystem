package com.example.backend.Entities;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String category;
    private int basePrice;
    private String image;
    private String description;
    private int age;
    @ManyToOne
    private Auction auction;
    @ManyToOne
    @JoinColumn(name = "userid")    
    private UserEntity userEntity;

    public Product() {}

    public Product(int id, String name, String category, int basePrice, String image, String description, int age, Auction auction) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.basePrice = basePrice;
        this.image = image;
        this.description = description;
        this.age = age;
        this.auction = auction;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getBasePrice() {
        return basePrice;
    }

    public void setBasePrice(int basePrice) {
        this.basePrice = basePrice;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Auction getAuction() {
        return auction;
    }

    public void setAuction(Auction auction) {
        this.auction = auction;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", category='" + category + '\'' +
                ", basePrice=" + basePrice +
                ", image='" + image + '\'' +
                ", description='" + description + '\'' +
                ", age=" + age +
                ", auction=" + auction +
                ", userEntity=" + userEntity +
                '}';
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }
}
