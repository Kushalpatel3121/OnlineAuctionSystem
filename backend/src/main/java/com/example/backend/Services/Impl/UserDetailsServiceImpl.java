package com.example.backend.Services.Impl;


import com.example.backend.Dao.UserDetailsDao;
import com.example.backend.Entities.UserDetails;
import com.example.backend.Services.UserDetailsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsServices {
    @Autowired
    private UserDetailsDao userDetailsDao;

    @Override
    public UserDetails saveUserDetails(UserDetails userDetails){
        try{
            userDetailsDao.save(userDetails);
        }
        catch (Exception e)
        {
            System.out.println(e.getMessage());
            throw e;
        }
        return userDetails;
    }

}
