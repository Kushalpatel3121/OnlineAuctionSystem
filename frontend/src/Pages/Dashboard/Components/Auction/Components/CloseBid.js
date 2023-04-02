import React, {useContext, useEffect, useState} from 'react';
import Timer from "../../Timer";
import Divider from "@mui/material/Divider";
import {AuctionContext} from "../../../../../Context/Context";
import TextField from "@mui/material/TextField";
import {Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import {apis} from "../../../../../Utils/api";
const CloseBid = ({product}) => {
    const {timeComplete, setTimeComplete, submit, setSubmit} = useContext(AuctionContext);
    const [isAuctionCompleted, setIsAuctionComplted] = useState(product.auction.completed);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [alreadyBid, setAlreadyBid] = useState(false);
    const [yourBid, setYourBid] = useState();
    const [bidData, setBidData] = useState();
    const min = product.basePrice;
    const [change, setChange] = useState(false);
    const [finalBids, setFinalBids] = useState([]);
    const [userRegistered, setUserRegistered] = useState(false);

    useEffect(()=>{
        const dt = new Date(Date.parse(product.auction.endingDate));
        if(dt.getTime() <= new Date().getTime())
        {
            console.log(product.auction)
            if(product.auction.completed == false)
            {
                axios.get(`${apis.changeAuctionStatus}/${product.auction.id}`, {headers: {Authorization: token}})
                    .then((res)=>{
                        console.log(res.data);
                        product.auction.completed = res.data.completed;
                    })
                    .catch((err)=>{
                        console.log(err);
                    });
                if(submit)
                    setSubmit(false)
                else
                    setSubmit(true)
            }
        }
    }, [timeComplete]);

    useEffect(()=>{
        axios.get(`${apis.getCloseBid}/${product.id}/${user.id}`, {headers:{Authorization:token}})
            .then((res)=>{
                console.log(res.data)
                if(res.data.data == true)
                {
                    setAlreadyBid(true);
                    setYourBid(res.data.closeBid.bidAmount);
                }
            })
            .catch((err)=>{

            });

        if(product.auction.completed == true)
        {
            axios.get(`${apis.getAllCloseBids}/${product.id}`, {headers: {Authorization: token}})
                .then((res)=>{
                    setFinalBids(res.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }

        axios.get(`${apis.checkUserRegistration}/${user.id}/${product.auction.id}`, {headers: {Authorization: token}})
            .then((res)=>{
                setUserRegistered(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });

    }, [change, submit])

    const changeBid = (e) => {
            setBidData(e.target.value);
    }

    const makeCloseBid = () => {
        if(bidData < product.basePrice)
            console.log("can not bid less than base price");
        else{
            console.log(bidData)
            axios.post(`${apis.postCloseBid}/${product.id}/${user.id}`, {bid:bidData}, {headers:{Authorization:token}})
                .then((res)=>{
                    console.log(res.data);
                    if(change == false)
                        setChange(true);
                    else
                        setChange(false);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
    }

    return (
        <>
            {
                (isAuctionCompleted) ? null
                    :
                    <>
                        <h3 className='font-bold text-lg'>Ends In : </h3>
                        <br/>
                        <Timer countDownTs={new Date(Date.parse(product.auction.endingDate))} />
                        <br />
                        <Divider orientation='horizontal' />
                    </>
            }
            {
                (isAuctionCompleted) ?
                    <>
                        <div className=''>
                            <h3 className='text-center font-bold my-4'>Auction has been completed</h3>
                            <Divider orientation='horizontal' />
                        </div>
                        {
                            (finalBids.length == 0) ? null :
                                <>
                                    <div>
                                        <h3 className='font-bold my-4'>Sold To:</h3>
                                        <div className='my-3'>
                                            <h4>{finalBids[0].userEntity.username}</h4>
                                            <h5>Rs. {finalBids[0].bidAmount}</h5>
                                        </div>
                                        <Divider orientation='horizontal' />

                                    </div>
                                </>
                        }
                        <div>
                            <h3 className='font-bold my-4'>Top Bids:</h3>
                            {
                                (finalBids.length == 0) ? null : finalBids.map((item, index)=>{
                                    if(index < 5)
                                    {
                                        return (
                                            <>
                                                <div className='my-2'>
                                                    <p className='inline'>Rs. {item.bidAmount}<span className='font-light text-xs ml-[35%]'>{item.userEntity.username}</span></p>
                                                </div>
                                                <Divider orientation='horizontal' />
                                            </>
                                        )
                                    }
                                })
                            }

                        </div>
                    </>
                    :(userRegistered == false) ?
                        (product.auction.userEntity.username == user.username) ?
                            <>
                                <h3 className='text-center font-bold my-4'>You are creator of the auction</h3>
                            </>
                            :
                        <>
                            <h3 className='text-center font-bold my-4'>You have not registered for the auction</h3>
                        </>
                        :
                    (alreadyBid == true) ?
                        <>
                            <h3 className='text-center font-bold my-4'>Your Bid</h3>
                            <div className='flex justify-center align-middle'>
                                <div className='w-2/4'>
                                    <TextField
                                        required
                                        id='outline-required'
                                        type='number'
                                        inputProps={{readOnly: true}}
                                        value={yourBid}

                                    />
                                </div>
                            </div>
                        </>
                        :
                            <>
                                <h3 className='text-center font-bold my-4'>Enter your Bid</h3>
                                <div className='flex justify-center align-middle'>
                                    <div className='w-2/4'>
                                        <TextField
                                            required
                                            id='outline-required'
                                            label='Your Bid'
                                            type='number'
                                            inputProps={{min}}
                                            onChange={changeBid}
                                            value={bidData}
                                        />
                                    </div>
                                </div>
                                <div className='my-4 text-center'>
                                    <Tooltip title='You can bid only one time'>
                                        <Button variant='contained' sx={{bgcolor:'#004d91'}} onClick={makeCloseBid}> Bid </Button>
                                    </Tooltip>
                                </div>
                            </>
            }
        </>
    );
};

export default CloseBid;