package com.example.backend.Services.Impl;

import com.example.backend.Dao.UserDao;
import com.example.backend.Entities.UserEntity;
import com.example.backend.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

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
            user = userDao.getById(id);
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
}
