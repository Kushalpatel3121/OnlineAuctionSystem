import React from 'react'
import { useState } from 'react'

const Sidebar = () => {
  const [isHomeActive,setHomeActive] = useState(true);
  return (
    <>
        <div className='flex flex-col bg-primary-dark-1 text-primary-white-1 w-[16%] min-h-[87vh] max-h-max text-center justify-between'>
            <div className='mt-4'>
              <ul className='flex flex-col list-none'>
                <li className='mb-3 hover:bg-primary-blue p-6' onClick={() => setHomeActive(!isHomeActive)}><a href=''>Home</a></li>
                <li className='mb-3 hover:bg-primary-blue p-6'><a href=''>My Listings</a></li>
                <li className='mb-3 hover:bg-primary-blue p-6'><a href=''>My Bids</a></li>
                <li className='mb-3 hover:bg-primary-blue p-6'><a href=''>Reminders</a></li>
              </ul>
            </div>
            <div className='flex flex-row justify-center align-middle mb-5 ml-2'>
              <img src='images/copyright-symbol.png' className='w-4 h-4 opacity-60'></img>
              <p className='text-sm text-primary-gray-1'>All Rights Reserved | BidSphere | 2023</p>
            </div>
        </div>
    </>
  )
}

export default Sidebar