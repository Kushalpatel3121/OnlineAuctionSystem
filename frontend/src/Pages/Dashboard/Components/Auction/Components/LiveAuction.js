import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import React, {useContext, useEffect, useState} from "react";
import {Tooltip} from "@mui/material";
import axios from "axios";
import {apis} from "../../../../../Utils/api";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {toast, ToastContainer} from "react-toastify";
import {AuctionContext} from "../../../../../Context/Context";
import 'react-toastify/dist/ReactToastify.css';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const LiveAuction = ({product}) => {

    const {timeComplete, setTimeComplete, submit, setSubmit} = useContext(AuctionContext);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [recentBids, setRecentBids] = useState([]);
    const [highBid, setHighBid] = useState(0);
    const [userRegistered, setUserRegistered] = useState(false);
    const [sendObject, setSendObject] = useState({currentBid: highBid, userEntity: user, product:product});
    const [isAuctionEnded, setIsAuctionEnded] = useState(product.auction.completed);
    let sendingData = {currentBid: highBid, userEntity: user, product: product};
    const startDate = new Date(product.auction.startingDate).toISOString();
    const endDate = new Date(product.auction.endingDate).toISOString();
    const [winner, setWinner] = useState();
    const [open, setOpen] = useState(false);


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

       stompClient.subscribe(`${apis.liveSocketSubscribe}/end-auction/${product.auction.id}/${product.id}`,
           function (response) {
               const data = JSON.parse(response.body).body;
               setIsAuctionEnded(true);
               if(submit)
                   setSubmit(false);
               else
                   setSubmit(true);
               console.log(data);
           });

    }, function (error){});

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

    let endAuction = () =>{
        stompClient.send(`${apis.liveSocketSend}/end-auction/${product.auction.id}/${product.id}`);
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

    function handleClose() {
        setOpen(false);
    }
    function handleClickOpen() {
        if(recentBids.length != 0)
        {

            axios.get(`${apis.getUserDetailsById}/${recentBids[0].userEntity.id}`, {headers:{Authorization:token}})
                .then((res)=>{
                    setWinner(res.data);
                })
                .catch((err)=>{
                    console.log(err);
                });
        }
        setOpen(true);
    }




    return (
        (recentBids.length == 0) ? null :

        (isAuctionEnded) ?
            <>
                <div className='m-4'>
                    <h3 className='text-center font-bold text-lg'>Auction has been ended</h3>
                </div>
                <Divider orientation='horizontal' />
                {
                    (recentBids.length == 0) ? null : (recentBids.length == 1) ?
                    
                        <div className='my-3 flex flex-col'>
                            <h3 className='font-bold text-lg'>Unsold</h3>
                            <br />
                            <Divider orientation="horizontal" />
                        </div>
                    :
                        <div className='my-3 flex flex-col'>
                            <h3 className='font-bold text-lg'>Sold To : </h3>
                            <div className='flex align-middle justify-between'>
                                <p>Rs. {recentBids[0].currentBid}</p>
                                <p className='font-light' style={{fontSize: "14px"}}>{recentBids[0].userEntity.username}</p>
                            </div>
                        </div>
                }

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
                    {
                        (winner == null) ? null :
                            <div className='my-8'>
                                <Dialog open={open} onClose={handleClose} fullWidth={true}>
                                    <DialogTitle>Winner : {recentBids[0].userEntity.username}</DialogTitle>
                                    <DialogContent>
                                        <h3 className='font-bold'>Details: </h3>
                                        <br />
                                        <p><b>Name: </b> {winner.name}</p><br/>
                                        <p><b>Email: </b> {winner.userEntity.email}</p><br/>
                                        <p><b>Contact No: </b> {winner.mobile}</p><br/>
                                        <p><b>Address: </b> {winner.hNo}, {winner.line1}, {winner.line2}, {winner.city} - {winner.pincode}</p>
                                        <br/>



                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                    }

                    {(product.auction.userEntity.username == user.username) ?
                        <div className='mt-8 text-center'>

                            <Button variant='contained' sx={{bgcolor:'#004d91'}} onClick={handleClickOpen}>View Winner</Button>
                        </div>
                     : null}

                </div>
            </>
            :
            <>
                <div className='m-4'>
                    <h3 className='text-center font-bold text-lg'>Auction is running</h3>
                </div>
                <Divider orientation='horizontal' />

                <div className='my-3 flex flex-col'>
                    <h3 className='font-bold text-lg'>Highest Bid : </h3>
                    <p>Rs. {highBid}</p>
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

                <Divider orientation='horizontal' />

                <div className=''>
                    {
                        (product.auction.userEntity.username == user.username) ?
                            <div className=''>
                                <h3 className='text-center font-bold'>Your are creator of auction.</h3>
                                <div className='flex justify-center my-5'>
                                    <Tooltip title='Auction will be ended'>
                                        <Button variant='contained' sx={{bgcolor:'#004d91'}} onClick={endAuction}> End Auction </Button>
                                    </Tooltip>
                                </div>
                            </div>
                            :
                            (userRegistered == false) ?
                                <div><h3 className='text-center font-bold'>You have not registered for the auction.</h3></div>
                                :
                            <div className=''>
                                <Tooltip title='Bid will be increased by 10%'>
                                    <Button variant='contained' sx={{bgcolor:'#004d91'}} onClick={increaseBid}> Bid </Button>
                                </Tooltip>
                            </div>
                    }

                </div>
                <ToastContainer />
            </>

    );
}

export default LiveAuction;