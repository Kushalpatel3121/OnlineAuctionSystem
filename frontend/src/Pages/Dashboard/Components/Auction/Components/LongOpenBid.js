import React, {useContext, useEffect, useState} from "react";
import Timer from "../../Timer";
import Divider from "@mui/material/Divider";
import axios from "axios";
import {apis} from "../../../../../Utils/api";
import {AuctionContext} from "../../../../../Context/Context";
import {Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {toast} from "react-toastify";
const LongOpenBid = ({product}) => {
    const {submit, setSubmit, timeComplete, setTimeComplete } = useContext(AuctionContext);
    const [recentBids, setRecentBids] = useState([]);
    const [highBid, setHighBid] = useState(0);
    const [isAuctionCompleted, setIsAuctionCompleted] = useState(product.auction.completed);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [token ,setToken] = useState(localStorage.getItem("token"));
    const [userRegistered, setUserRegistered] = useState(false);
    const [sendObject, setSendObject] = useState({currentBid: highBid, userEntity: user, product:product});
    let sendingData = {currentBid: highBid, userEntity: user, product: product};
    const startDate = new Date(product.auction.startingDate).toISOString();
    const endDate = new Date(product.auction.endingDate).toISOString();
    product.auction.startingDate = startDate;
    product.auction.endingDate = endDate;

    const sock = new SockJS("http://localhost:8080/ws");
    const stompClient = Stomp.over(sock);

    stompClient.connect({}, function (frame){
        console.log("Connected: " + frame);
        stompClient.subscribe(`${apis.liveSocketSubscribe}/${product.auction.id}/${product.id}`,
            function(response){
                const data = JSON.parse(response.body).body;
                setHighBid(data[0].currentBid);
                setRecentBids(data);
            });

    }, function (error){});

    useEffect(()=>{
        const dt = new Date(Date.parse(product.auction.endingDate));
        if(dt.getTime() <= new Date().getTime())
        {

            if(product.auction.completed == false)
            {
                axios.get(`${apis.changeAuctionStatus}/${product.auction.id}`, {headers: {Authorization: token}})
                    .then((res)=>{
                        console.log(res.data);
                        product.auction.completed = res.data.completed;
                        console.log(res.data.completed)
                        setIsAuctionCompleted(res.data.completed);
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
    }, [timeComplete])

    let increaseBid = (e) =>{
        e.preventDefault();
        if(recentBids[0].userEntity.username == user.username)
        {
            toast('You are already highest bidder', {position: "bottom-right"});
            return;
        }
        setSendObject((values) => ({...values, currentBid: (highBid + 0.1 * highBid) }));
        sendingData.currentBid = highBid + highBid * 0.1;
        stompClient.send(`${apis.liveSocketSend}/${product.auction.id}/${product.id}`, {}, JSON.stringify(sendingData));
    }

    useEffect(()=>{
        axios.get(`${apis.getCurrentBidInitially}/${product.id}`, {headers: {Authorization: token}})
            .then((res)=>{
                setRecentBids(res.data);
                setHighBid(res.data[0].currentBid);
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [submit, timeComplete]);

    useEffect(()=>{
        axios.get(`${apis.checkUserRegistration}/${user.id}/${product.auction.id}`, {headers: {Authorization: token}})
            .then((res)=>{
                setUserRegistered(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });


    }, [])


    return (
        (isAuctionCompleted) ? (recentBids.length == 0) ? null :
            <>
                <div className='m-4'>
                    <h3 className='text-center font-bold text-lg'>Auction has been ended</h3>
                </div>
                <Divider orientation='horizontal' />

                <div className='my-3 flex flex-col'>
                    <h3 className='font-bold text-lg'>Sold To : </h3>
                    <div className='flex align-middle justify-between'>
                        <p>Rs. {recentBids[0].currentBid}</p>
                        <p className='font-light' style={{fontSize: "14px"}}>{recentBids[0].userEntity.username}</p>
                    </div>
                </div>

                <Divider orientation='horizontal' />
                <div className='flex flex-col my-3'>
                    <h3 className='font-bold text-lg'>Recent bids : </h3>
                    <Divider orientation='horizontal' />

                    {
                        (recentBids.length) == 1 ?
                            <h3 className='text-center my-4'>No Recent Bids</h3> :
                            recentBids.map((item, index)=> {
                                if(index < 5 && item.userEntity.username != product.auction.userEntity.username)
                                {
                                    console.log(index, item);
                                    return (
                                        <div>
                                            <div className='my-2'>
                                                <p className='inline'>Rs. {item.currentBid}<span className='font-light text-xs ml-[25%]'>{item.userEntity.username}</span></p>
                                            </div>
                                            <Divider orientation='horizontal' />
                                        </div>
                                    );
                                }
                            })
                    }

                </div>
            </>
            :
                <>
                    <div>
                        <h3>Ends In: </h3>
                        <Timer countDownTs={product.auction.endingDate} />
                        <Divider orientation='horizontal' />
                    </div>
                    <div className='flex flex-col my-3'>

                        <div className='my-4 flex flex-col'>
                            <h3 className='font-bold text-lg'>Highest Bid : </h3>
                            <p>Rs. {highBid}</p>
                        </div>
                        <Divider orientation='horizontal' />


                        <h3 className='font-bold my-4 text-lg'>Recent bids : </h3>



                        {
                            (recentBids.length) == 1 ?
                                <h3 className='text-center my-4'>No Recent Bids</h3> :
                                recentBids.map((item, index)=> {
                                    if(index < 5 && item.userEntity.username != product.auction.userEntity.username)
                                    {
                                        return (
                                            <div>
                                                <div className='my-2'>
                                                    <p className='inline'>Rs. {item.currentBid}<span className='font-light text-xs ml-[25%]'>{item.userEntity.username}</span></p>
                                                </div>
                                                <Divider orientation='horizontal' />
                                            </div>
                                        );
                                    }
                                })
                        }

                        <Divider orientation='horizontal' />

                        <div className=''>
                            {
                                (product.auction.userEntity.username == user.username) ?
                                    <div className=''>
                                        <h3 className='text-center font-bold my-4'>Your are creator of auction.</h3>

                                    </div>
                                    :
                                    (userRegistered == false) ?
                                        <div><h3 className='text-center font-bold'>You have not registered for the auction.</h3></div>
                                        :
                                        <div className='text-center my-4'>
                                            <Tooltip title='Bid will be increased by 10%'>
                                                <Button variant='contained' sx={{bgcolor:'#004d91'}} onClick={increaseBid} > Bid </Button>
                                            </Tooltip>
                                        </div>
                            }

                        </div>

                    </div>
                </>
    );
}

export default LongOpenBid;