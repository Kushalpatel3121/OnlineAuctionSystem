package com.example.backend.Services;

import com.example.backend.Dto.LoginDto;
import com.example.backend.Entities.UserEntity;


import java.util.List;


public interface UserServices {
    public UserEntity createUser(UserEntity user);
    public UserEntity getUserById(int id);
    public List<UserEntity> getAllUser();
    public UserEntity findUserByUsernameOrEmail(String username, String email);
    public UserEntity findUserByUsername(String username);
    public LoginDto changeUsername(LoginDto loginDto);
    public Boolean isUserExistByUsername(String username);
    public Boolean isUserExistByEmail(String username);
}
