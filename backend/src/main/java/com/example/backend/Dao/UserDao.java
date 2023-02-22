package com.example.backend.Dao;

import com.example.backend.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDao extends JpaRepository<UserEntity, Integer>{
    public UserEntity getById(int id);
    public UserEntity findByEmail(String email);
    public Optional<UserEntity> findByUsername(String username);
    public UserEntity getByUsername(String username);
    public Boolean existsByUsername(String username);
    public Boolean existsByEmail(String email);
}
