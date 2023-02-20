package com.example.backend.Dto;

import com.example.backend.Entities.Auction;
import com.example.backend.Entities.Product;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.Calendar;
import java.util.Date;

@Data
public class AuctionProductDto {
    private String auctionName;
    private String auctionType;
    private Date auctionStartingDate;
    private Date auctionEndingDate;
    private String auctionStartingTime;
    private String auctionEndingTime;
    private int noOfProduct;
    private int noOfRegistration;
    private String productName;
    private int productBasePrice;
    private String productDescription;
//    private MultipartFile productImage;
    private int productAge;
    private String productCategory;



    public AuctionProductDto() {
    }

    public void changeDate()
    {
        String[] startTime = auctionStartingTime.split(":");


        int auctionStartingHour = Integer.parseInt(startTime[0]),
                auctionStartingMin = Integer.parseInt(startTime[1]),
                auctionStartingSec = Integer.parseInt(startTime[2]);



        Calendar c = Calendar.getInstance();
        c.set(Calendar.DATE, auctionStartingDate.getDate());
        c.set(Calendar.HOUR_OF_DAY, auctionStartingHour);
        c.set(Calendar.MINUTE, auctionStartingMin);
        c.set(Calendar.SECOND, auctionStartingSec);
        this.auctionStartingDate = c.getTime();

        String[] endTime = auctionEndingTime.split(":");
        int auctionEndingHour = Integer.parseInt(endTime[0]),
                auctionEndingMin = Integer.parseInt(endTime[1]),
                auctionEndingSec = Integer.parseInt(endTime[2]);


        c.set(Calendar.DATE, auctionEndingDate.getDate());
        c.set(Calendar.HOUR_OF_DAY, auctionEndingHour);
        c.set(Calendar.MINUTE, auctionEndingMin);
        c.set(Calendar.SECOND, auctionEndingSec);

        this.auctionEndingDate = c.getTime();
    }

    public Product getProduct(String image, Auction auction)
    {
        Product product = new Product();
        product.setAge(this.productAge);
        product.setCategory(this.productCategory);
        product.setDescription(this.productDescription);
        product.setName(this.productName);
        product.setBasePrice(this.productBasePrice);
        product.setDescription(this.productDescription);
        product.setImage(image);
        product.setAuction(auction);
        return product;
    }

    public Auction getAuction()
    {
        Auction auction = new Auction();
        auction.setNoOfProducts(1);
        auction.setName(this.auctionName);
        auction.setStartingDate(this.auctionStartingDate);
        auction.setEndingDate(this.getAuctionEndingDate());
        auction.setType(this.auctionType);
        auction.setNoOfRegistration(0);
        if(auction.getType() == "LIVE")
        {
            auction.setEndingDate(null);
        }

        return auction;
    }

    @Override
    public String toString() {
        return "AuctionProductDto{" +
                "auctionName='" + auctionName + '\'' +
                ", auctionType='" + auctionType + '\'' +
                ", auctionStartingDate=" + auctionStartingDate +
                ", auctionEndingDate=" + auctionEndingDate +
                ", auctionStartingTime=" + auctionStartingTime +
                ", auctionEndingTime=" + auctionEndingTime +
                '}';
    }
}
