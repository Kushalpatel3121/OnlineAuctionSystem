import React from 'react'
import '../Styles/Header.css'
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("../../login");
  }
  return (
    <>
      <div className='flex flex-row bg-primary-blue text-primary-white-1 min-h-[13vh] min-w-full p-[1%] justify-between items-center'>
        <div className='mx-10 flex flex-row items-center'>
          <img src='/images/auction-logo-1.png' alt='Auction-logo' className='inline w-16'></img>
          <h3 className='inline text-2xl mx-2'>BidSphere</h3>
        </div>
        <div className='flex flex-row mx-9 items-center'>
          <ul className='flex flex-row list-none mr-9'>
            <li className='mr-10'><a href=''>About Us</a></li>
            {/* <li><a href=''>Contact</a></li> */}
          </ul>
          <div className='w-10 dropdown inline-block'>
            <button>
              <img src='/images/account-icon-48.png' alt='account-icon'></img>
            </button>
            <div>
              <ul className='dropdown-menu hidden py-3 px-3 bg-primary-blue-light/90 absolute rounded-t rounded-b w-32 right-[1%] divide-y divide-solid z-10'>
                <li className=''><a className='hover:bg-primary-blue whitespace-no-wrap block py-2 px-2 mb-1 rounded-sm cursor-pointer'>My Profile</a></li>
                <li className=''><a className='hover:bg-primary-blue whitespace-no-wrap block py-2 px-2 mt-1 rounded-sm cursor-pointer' onClick={Logout}>Log Out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header