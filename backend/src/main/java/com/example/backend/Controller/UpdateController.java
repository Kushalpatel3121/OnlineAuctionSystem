package com.example.backend.Controller;

import com.example.backend.Entities.Updates;
import com.example.backend.Services.UpdateServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/updates")
public class UpdateController {
    @Autowired
    private UpdateServices updateServices;

    @GetMapping("get-all-update")
    public ResponseEntity getAllUpdates()
    {
        List<Updates> updates = updateServices.getAllUpdates();
        return ResponseEntity.ok(updates);
    }
}
