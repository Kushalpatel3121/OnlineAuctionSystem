package com.example.backend.Dao;

import com.example.backend.Entities.UserDetails;
import com.example.backend.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsDao extends JpaRepository<UserDetails, Integer>{
}
