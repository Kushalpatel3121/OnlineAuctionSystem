package com.example.backend.Controller;

import com.example.backend.Entities.UserDetails;
import com.example.backend.Entities.UserEntity;
import com.example.backend.Security.TokenGenerator;
import com.example.backend.Services.UserDetailsServices;
import com.example.backend.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class HomeController {

    @Autowired
    private TokenGenerator tokenGenerator;
    @Autowired
    private UserServices userServices;
    @Autowired
    private UserDetailsServices userDetailsServices;

    @GetMapping("/get-details")
    public ResponseEntity getUserFromToken(@RequestHeader("Authorization") String token)
    {
        UserEntity userEntity;
        if(token != null)
        {
            token = token.substring(7);
            if(tokenGenerator.validateToken(token))
            {
                String username = tokenGenerator.getUserFromJwt(token);
                userEntity = userServices.findUserByUsername(username);
                UserDetails userDetails = userDetailsServices.getUserDetailsByUser(userEntity);
                return ResponseEntity.ok(userDetails);
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Server error");
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity getUserById(@PathVariable  int id)
    {
        UserEntity userEntity = userServices.getUserById(id);
        UserDetails userDetails = userDetailsServices.getUserDetailsByUser(userEntity);
        return ResponseEntity.ok(userDetails);
    }

}
