package com.example.backend.Controller;

import com.example.backend.Entities.UserEntity;
import com.example.backend.Security.TokenGenerator;
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

    @GetMapping("/get-user")
    public ResponseEntity getUserFromToken(@RequestHeader("Authorization") String token)
    {
        UserEntity userEntity;
        if(token != null)
        {
            token = token.substring(7);
            if(tokenGenerator.validateToken(token))
            {
                String username = tokenGenerator.getUserFromJwt(token);
                userEntity = userServices.findUserByUsernameOrEmail(username, username);
                return ResponseEntity.ok(userEntity);
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Server error");
    }
}
