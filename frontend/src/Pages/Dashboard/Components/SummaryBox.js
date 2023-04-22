import React, {useContext, useEffect, useState} from 'react'
import axios from "axios";
import {apis} from "../../../Utils/api";
import {AuctionContext} from "../../../Context/Context";

const SummaryBox = () => {
    const [totalAuctions, setTotalAuctions] = useState(0);
    const [createdAuctions, setCreatedAuction] = useState(0);
    const [registeredAuctions, setRegisteredAuction] = useState(0);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const {submit, setSubmit} = useContext(AuctionContext);

    useEffect(()=>{
        axios.get(apis.getTotalAuctions, {headers: {Authorization: token}})
            .then((res)=>{
                setTotalAuctions(res.data);
            })
            .catch((err)=>{ console.log(err); });

        axios.get(apis.getTotalAuctionsOfUser, {headers: {Authorization: token}})
            .then((res)=>{
                setCreatedAuction(res.data);
            })
            .catch((err)=>{ console.log(err); });

        axios.get(apis.getCountRegisteredAuctions, {headers: {Authorization:token}})
            .then((res)=>{
                setRegisteredAuction(res.data);
            })
            .catch((err)=>{ console.log(err); })
    }, [submit])
  return (
    <>
        <div className='flex flex-row justify-between justify-items-center'>
            <div className='min-h-max min-w-[33%] bg-primary-dark-1/90 hover:bg-primary-dark-1 p-3 rounded-sm text-primary-white-1'>
                <h2 className='font-bold text-lg'>Total Auctions</h2>
                <p>{totalAuctions}</p>
            </div>
            <div className='min-h-max min-w-[33%] bg-primary-dark-1/90 hover:bg-primary-dark-1 p-3 rounded-sm text-primary-white-1'>
                <h2 className='font-bold text-lg'>Registered Auctions</h2>
                <p>{createdAuctions}</p>
            </div>
            <div className='min-h-max min-w-[33%] bg-primary-dark-1/90 hover:bg-primary-dark-1 p-3 rounded-sm text-primary-white-1'>
                <h2 className='font-bold text-lg'>Auctions Registered in</h2>
                <p>{registeredAuctions}</p>
            </div>
        </div>
    </>
  )
}

export default SummaryBox