package com.example.backend.Dto;

import com.example.backend.Entities.Updates;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UpdatesDao extends JpaRepository<Updates, Integer> {

}
