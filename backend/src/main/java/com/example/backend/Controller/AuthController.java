/*
* Authentication controller
* User can register
* User can login
 */

package com.example.backend.Controller;

import com.example.backend.Dto.AuthResponseDto;
import com.example.backend.Dto.LoginDto;
import com.example.backend.Dto.RegisterDto;
import com.example.backend.Entities.UserDetails;
import com.example.backend.Entities.UserEntity;
import com.example.backend.Security.TokenGenerator;
import com.example.backend.Services.UserDetailsServices;
import com.example.backend.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")

public class AuthController {
    private AuthenticationManager authenticationManager;
    private PasswordEncoder passwordEncoder;
    private TokenGenerator tokenGenerator;
    @Autowired
    private UserServices userServices;
    @Autowired
    private UserDetailsServices userDetailsServices;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder,
                          TokenGenerator tokenGenerator) {
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
        this.tokenGenerator = tokenGenerator;
    }

    @PostMapping("check-username")
    public ResponseEntity checkUsername(@RequestBody LoginDto loginDto)
    {
        Boolean check = userServices.isUserExistByUsername(loginDto.getUsername());
        return ResponseEntity.ok(check);
    }

    @PostMapping("check-email")
    public ResponseEntity checkEmail(@RequestBody LoginDto loginDto)
    {
        Boolean check = userServices.isUserExistByEmail(loginDto.getUsername());
        return ResponseEntity.ok(check);
    }

    @PostMapping("register")
    public ResponseEntity register(@RequestBody RegisterDto registerDto)
    {
        /*
        Checking for username or email already taken
         */
        UserEntity userEntity = userServices.findUserByUsernameOrEmail(registerDto.getUsername(), registerDto.getEmail());

        if(userServices.findUserByUsernameOrEmail(registerDto.getUsername(), registerDto.getEmail()) != null)
            return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).body("Username or Email is already taken");

        /*
        Setting user and user details ... and add it to database
         */
        UserEntity user = registerDto.getUser();
        UserDetails userDetails = registerDto.getUserDetail();
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userServices.createUser(user);

        userDetails.setUserEntity(user);

        userDetailsServices.saveUserDetails(userDetails);

        System.out.println(userDetails);

        return new ResponseEntity<>(user, HttpStatus.BAD_REQUEST        );
    }

    @PostMapping("login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody LoginDto loginDto)
    {
        /*
        If user has entered email then get username
         */
        userServices.changeUsername(loginDto);

        /*
        Checking for valid credentials
         */
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getUsername(),
                        loginDto.getPassword()
                )
        );

        /*
        Save user to context and generate token
         */
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = tokenGenerator.generateToken(authentication);

        return new ResponseEntity<>(new AuthResponseDto(token), HttpStatus.OK);
    }
}
