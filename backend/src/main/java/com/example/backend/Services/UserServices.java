package com.example.backend.Services;

import com.example.backend.Entities.UserEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserServices {
    public UserEntity createUser(UserEntity user);
    public UserEntity getUserById(int id);
    public List<UserEntity> getAllUser();
}
