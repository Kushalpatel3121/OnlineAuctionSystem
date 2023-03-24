import Timer from "../../Timer";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import {Tooltip} from "@mui/material";

const LiveAuction = ({product}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [token, setToken] = useState(localStorage.getItem("token"));



    return (
        <>
            <div className='m-4'>
                <h3 className='text-center font-bold text-lg'>Auction is running</h3>
            </div>
            <Divider orientation='horizontal' />

            <div className='my-3 flex flex-col'>
                <h3 className='font-bold text-lg'>Highest Bid : </h3>
                <p>$98766</p>
            </div>
            <Divider orientation='horizontal' />

            <div className='flex flex-col my-3'>
                <h3 className='font-bold text-lg'>Recent bids : </h3>
                <Divider orientation='horizontal' />
                <div className='mx-5 my-2'>
                    <div className='my-2'>
                        <p className='inline'>$87663 <span className='font-light text-xs ml-[25%]'>18/4/23 - 8:00 pm </span></p>
                        <p>User12001</p>
                    </div>
                    <Divider orientation='horizontal' />

                    <div className='my-2'>
                        <p className='inline'>$87663 <span className='font-light text-xs ml-[25%]'>18/4/23 - 8:00 pm </span></p>
                        <p>User12001</p>
                    </div>
                    <Divider orientation='horizontal' />

                    <div className='my-2'>
                        <p className='inline'>$87663 <span className='font-light text-xs ml-[25%]'>18/4/23 - 8:00 pm </span></p>
                        <p>User12001</p>
                    </div>
                    <Divider orientation='horizontal' />

                    <div className='my-2'>
                        <p className='inline'>$87663 <span className='font-light text-xs ml-[25%]'>18/4/23 - 8:00 pm </span></p>
                        <p>User12001</p>
                    </div>
                    <Divider orientation='horizontal' />

                    <div className='my-2'>
                        <p className='inline'>$87663 <span className='font-light text-xs ml-[25%]'>18/4/23 - 8:00 pm </span></p>
                        <p>User12001</p>
                    </div>
                    <Divider orientation='horizontal' />
                </div>
            </div>

            <Divider orientation='horizontal' />

            <div className='flex flex-row my-4 justify-center'>
                <div className=''>
                    <Tooltip title='Bid will be increased by 10%'>
                        <Button variant='contained' sx={{bgcolor:'#004d91'}} > Bid </Button>
                    </Tooltip>
                </div>
            </div>
        </>
    );
}

export default LiveAuction;