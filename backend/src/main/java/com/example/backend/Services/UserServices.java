package com.example.backend.Services;

import com.example.backend.Dto.LoginDto;
import com.example.backend.Entities.UserEntity;


import java.util.List;


public interface UserServices {
    public UserEntity createUser(UserEntity user);
    public UserEntity getUserById(int id);
    public List<UserEntity> getAllUser();
    public UserEntity findUserByUsernameOrEmail(String username, String email);
    public LoginDto changeUsername(LoginDto loginDto);
}
