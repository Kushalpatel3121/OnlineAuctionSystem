package com.example.backend.Dto;

import com.example.backend.Entities.UserDetails;
import com.example.backend.Entities.UserEntity;
import lombok.Data;


@Data
public class RegisterDto {
    String username;
    String email;
    Long mobile;
    String name;
    String password;
    String hNo;
    String line1;
    String line2;
    String city;
    Long pincode;
    String role = "ROLE_USER";

    public RegisterDto() {}

    public UserEntity getUser()
    {
        UserEntity user = new UserEntity(username, email, password, role);
        return user;
    }

    public UserDetails getUserDetail()
    {
        UserEntity user = new UserEntity(username, email, password, role);
        UserDetails userDetails = new UserDetails(name, mobile, hNo, line1, line2, city, pincode, user);
        return userDetails;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getMobile() {
        return mobile;
    }

    public void setMobile(Long mobile) {
        this.mobile = mobile;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String gethNo() {
        return hNo;
    }

    public void sethNo(String hNo) {
        this.hNo = hNo;
    }

    public String getLine1() {
        return line1;
    }

    public void setLine1(String line1) {
        this.line1 = line1;
    }

    public String getLine2() {
        return line2;
    }

    public void setLine2(String line2) {
        this.line2 = line2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Long getPincode() {
        return pincode;
    }

    public void setPincode(Long pincode) {
        this.pincode = pincode;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
