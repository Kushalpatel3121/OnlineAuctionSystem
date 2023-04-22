package com.example.backend.Services.Impl;

import com.example.backend.Dto.UpdatesDao;
import com.example.backend.Entities.Updates;
import com.example.backend.Services.UpdateServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UpdateServiceImpl implements UpdateServices {
    @Autowired
    private UpdatesDao updatesDao;

    @Override
    public Updates addUpdate(Updates update) {
        try{
            updatesDao.save(update);
            return update;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    public List<Updates> getAllUpdates() {
        try{
            List<Updates> updates = updatesDao.findAll();
            return updates;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
    }
}
