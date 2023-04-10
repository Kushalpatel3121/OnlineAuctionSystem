import React, {useContext} from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import {AuctionContext} from "../../../Context/Context";

const Sidebar = () => {
  const [isHomeActive,setHomeActive] = useState(true);
  const {url, setUrl} = useContext(AuctionContext);
  return (
    <>
        <div className='flex flex-col bg-primary-blue-light/90 text-primary-white-1 w-[16%] min-h-[87vh] max-h-max text-center justify-between'>
            <div className='mt-4'>
              <ul className='flex flex-col list-none'>
                <li className='mb-3 hover:bg-primary-blue p-6' onClick={
                    () => {
                        setHomeActive(!isHomeActive);
                        setUrl("/");
                    }}
                    ><a href=''><Link to='/dashboard'>Home</Link></a></li>
                <li className='mb-3 hover:bg-primary-blue p-6'><a className='hover:cursor-pointer' onClick={()=>{setUrl("/myListing")}}>My Listings</a></li>
                <li className='mb-3 hover:bg-primary-blue  p-6'><a className='hover:cursor-pointer' onClick={ ()=> {setUrl("/myBidding")}}>My Bids</a></li>
                <li className='mb-3 hover:bg-primary-blue hover:cursor-pointer p-6'><a href=''>Reminders</a></li>
              </ul>
            </div>
            <div className='flex flex-row justify-center align-middle mb-5 ml-2'>
              <img src='images/copyright-symbol.png' className='w-4 h-4 opacity-60'></img>
              <p className='text-sm text-primary-dark-1'>All Rights Reserved | BidSphere | 2023</p>
            </div>
        </div>
    </>
  )
}

export default Sidebar