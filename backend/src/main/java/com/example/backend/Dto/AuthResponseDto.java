package com.example.backend.Dto;

import com.example.backend.Entities.UserEntity;
import lombok.Data;

@Data
public class AuthResponseDto {
    private String accessToken;
    private UserEntity userEntity;

    public AuthResponseDto(String accessToken, UserEntity userEntity) {
        this.accessToken = "Bearer " + accessToken;
        this.userEntity = userEntity;
    }
}
