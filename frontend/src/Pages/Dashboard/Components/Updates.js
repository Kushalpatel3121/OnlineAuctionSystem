import React, {useContext, useEffect, useState} from 'react'
import '../Styles/Updates.css'
import axios from "axios";
import {apis} from "../../../Config/api";
import {AuctionContext} from "../../../Context/Context";

const Updates = () => {
    const {submit, setSubmit} = useContext(AuctionContext);
    const [updates, setUpdates] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(()=>{
        axios.get(apis.getAllUpdates, {headers:{Authorization: token}})
            .then((res) => {
                setUpdates(res.data);
            })
            .catch((err) => {});
    }, [submit]);

    return (

        <div className='m-3'>
            <h1 className='text-center bg-primary-dark-1 rounded-sm text-primary-white-1 p-4 text-2xl'>Updates</h1>
            <div className='mx-2 my-4 overflow-y-auto h-[59vh]'>


                {
                    (updates.length != 0) ?
                    (updates.map((item, index) => {
                        return (
                            <>
                                <div className='my-2 hover:bg-primary-yellow-1/50 min-h-max'>
                                    <h3 className='font-bold text-md'>{item.title}</h3>
                                    <p className='text-sm'>{item.description}</p>
                                </div>

                                <hr></hr>
                            </>
                        )
                    })) : null
                }

                <div className='my-2 hover:bg-primary-yellow-1/50 min-h-max'>
                    <h3 className='font-bold text-md'>Bid Update</h3>
                    <p className='text-sm'>User122 is the highest bidder with bid of $122099</p>
                </div>

                <hr></hr>

                <div className='my-2'>
                    <h3 className='font-bold text-md'>New Auction released</h3>
                    <p className='text-sm'>Your Auction is live</p>
                </div>

                <hr></hr>

                <div className='my-2'>
                    <h3 className='font-bold text-md'>Bid Update</h3>
                    <p className='text-sm'>User122 is the highest bidder with bid of $122099</p>
                </div>

                <hr></hr>
                
                <div className='my-2'>
                    <h3 className='font-bold text-md'>New Auction released</h3>
                    <p className='text-sm'>Your Auction is live</p>
                </div>

                <hr></hr>

                <div className='my-2'>
                    <h3 className='font-bold text-md'>Bid Update</h3>
                    <p className='text-sm'>User122 is the highest bidder with bid of $122099</p>
                </div>

                <hr></hr>
                
                <div className='my-2'>
                    <h3 className='font-bold text-md'>New Auction released</h3>
                    <p className='text-sm'>Your Auction is live</p>
                </div>
                <hr></hr>

                <div className='my-2'>
                    <h3 className='font-bold text-md'>Bid Update</h3>
                    <p className='text-sm'>User122 is the highest bidder with bid of $122099</p>
                </div>

                <hr></hr>
                
                <div className='my-2'>
                    <h3 className='font-bold text-md'>New Auction released</h3>
                    <p className='text-sm'>Your Auction is live</p>
                </div>
                <hr></hr>

                <div className='my-2'>
                    <h3 className='font-bold text-md'>Bid Update</h3>
                    <p className='text-sm'>User122 is the highest bidder with bid of $122099</p>
                </div>

                <hr></hr>
                
                <div className='my-2'>
                    <h3 className='font-bold text-md'>New Auction released</h3>
                    <p className='text-sm'>Your Auction is live</p>
                </div>
            </div>
        </div>
    )
}

export default Updates