package com.example.backend.Dto;

import com.example.backend.Entities.CloseBid;

public class CloseBidResponse {
    boolean isData = false;
    CloseBid closeBid;

    public CloseBid getCloseBid() {
        return closeBid;
    }

    public void setCloseBid(CloseBid closeBid) {
        this.closeBid = closeBid;
    }

    public boolean isData() {
        return isData;
    }

    public void setData(boolean data) {
        isData = data;
    }
}
