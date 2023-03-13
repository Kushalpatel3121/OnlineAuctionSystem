package com.example.backend.Services;

import com.example.backend.Entities.UserDetails;
import com.example.backend.Entities.UserEntity;


public interface UserDetailsServices {
    public UserDetails saveUserDetails(UserDetails userDetails);
    public UserDetails getUserDetailsByUser(UserEntity userEntity);
}
