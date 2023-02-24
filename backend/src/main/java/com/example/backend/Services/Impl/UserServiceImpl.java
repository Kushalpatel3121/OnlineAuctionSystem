package com.example.backend.Services.Impl;

import com.example.backend.Dao.UserDao;
import com.example.backend.Dto.LoginDto;
import com.example.backend.Entities.UserEntity;
import com.example.backend.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserServices {
    @Autowired
    private UserDao userDao;
    @Override
    public UserEntity createUser(UserEntity user) {
        try{
            userDao.save(user);
        }
        catch (Exception e)
        {
            System.out.println(e.getMessage());
            throw e;
        }
        return user;
    }

    @Override
    public UserEntity getUserById(int id) {
        UserEntity user;
        try{
            user = userDao.findById(id).get();
        }
        catch (Exception e)
        {
            System.out.println(e.getMessage());
            throw e;
        }
        return user;
    }

    @Override
    public List<UserEntity> getAllUser() {
        List<UserEntity> users;
        try{
            users = userDao.findAll();
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            throw e;
        }
        return users;
    }
    @Override
    public UserEntity findUserByUsernameOrEmail(String username, String email)
    {
        UserEntity user = userDao.getByUsername(username);
        if(user == null)
            user = userDao.findByEmail(email);
        return user;
    }

    @Override
    public LoginDto changeUsername(LoginDto loginDto) {
        UserEntity userEntity = userDao.findByEmail(loginDto.getUsername());
        if(userEntity != null)
        {
            loginDto.setUsername(userEntity.getUsername());
        }
        return loginDto;
    }

    @Override
    public Boolean isUserExistByUsername(String username) {
        Boolean check = userDao.existsByUsername(username);
        return check;
    }

    @Override
    public Boolean isUserExistByEmail(String email) {
        Boolean check = userDao.existsByEmail(email);
        return check;
    }

}
