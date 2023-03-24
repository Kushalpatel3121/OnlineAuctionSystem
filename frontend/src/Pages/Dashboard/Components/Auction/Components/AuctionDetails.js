import Divider from "@mui/material/Divider";
import React, {useEffect} from "react";

const AuctionDetails = ({product}) => {

    return (
        <div className='bg-primary-yellow-1 basis-2/7'>
            <h3 className='m-2 font-bold text-3xl'>Auction Details</h3>
            <hr />
            <div className='flex flex-col m-3'>
                <div className='mb-3 flex flex-col'>
                    <h3 className='font-bold text-lg'>Name : </h3>
                    <p>{product.auction.name}</p>
                </div>
                <Divider orientation='horizontal' />

                <div className='my-3 flex flex-col'>
                    <h3 className='font-bold text-lg'>Type : </h3>
                    <p>{product.auction.type}</p>
                </div>
                <Divider orientation='horizontal' />

                <div className='my-3 flex flex-col'>
                    <h3 className='font-bold text-lg'>Starting Date : </h3>
                    <p>{product.auction.startingDate.substring(4,15)}</p>
                </div>
                <Divider orientation='horizontal' />

                <div className='my-3 flex flex-col'>
                    <h3 className='font-bold text-lg'>Starting Time : </h3>
                    <p>{product.auction.startingDate.substring(16,25)}</p>
                </div>
                <Divider orientation='horizontal' />

                <div className='my-3 flex flex-col'>
                    <h3 className='font-bold text-lg'>Ending Date : </h3>
                    <p>
                        {(product.auction.type == 'Live Auction')?  '-' : product.auction.endingDate.substring(4,15)}</p>
                </div>
                <Divider orientation='horizontal' />

                <div className='my-3 flex flex-col'>
                    <h3 className='font-bold text-lg'>Ending Time : </h3>
                    <p>{(product.auction.type == 'Live Auction')? '-' : product.auction.endingDate.substring(16,25)}</p>
                </div>
                <Divider orientation='horizontal' />

                <div className='my-3 flex flex-col'>
                    <h3 className='font-bold text-lg'>Created by : </h3>
                    <p>{product.auction.userEntity.username}</p>
                </div>
                <Divider orientation='horizontal' />
            </div>
        </div>
    );
}

export default AuctionDetails;