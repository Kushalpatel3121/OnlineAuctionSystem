package com.example.backend.Services;

import com.example.backend.Entities.Updates;

import java.util.List;

public interface UpdateServices {
    public Updates addUpdate(Updates update);
    public List<Updates> getAllUpdates();
}
