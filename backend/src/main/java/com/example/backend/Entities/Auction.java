package com.example.backend.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

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
    private int noOfRegistration;

    public Auction() {}

    public Auction(int id, String name, String type, Date startingDate, Date endingDate, int noOfRegistration) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.noOfRegistration = noOfRegistration;
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
}
