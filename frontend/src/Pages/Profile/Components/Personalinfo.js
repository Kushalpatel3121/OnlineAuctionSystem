import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apis } from "../../../Config/api";


const Personalinfo = () => {
  const [details, setDetails] = useState({
    "id": 2,
    "name": "Kushal",
    "mobile": 8128946082,
    "hNo": "218B",
    "line1": "APC Center",
    "line2": "College Road",
    "city": "Nadiad",
    "pincode": 387002,
    "userEntity": {
      "id": 2,
      "username": "kushal0312",
      "email": "patelkushal2003@gmail.com",
      "password": "$2a$10$ptbIr9p72ynhSUZB57QD2ePoKNKckzjQKQhd8hA3gwwF.Q/St1Ne.",
      "role": "Admin"
    }
  });
  const navigate = useNavigate();

  // useEffect(()=> {
  //   axios.get(apis.getUserDetails, { headers: { Authorization: localStorage.getItem("token")}})
  //       .then((res)=>{
  //         // console.log(res.data);
  //         setDetails(res.data);
  //       })
  //       .catch((err)=>{
  //         console.log(err)
  //         navigate("../../login")
  //       });

  // }, [])

  return (
    <>
      {(details == null) ? null :
        <div className='w-[100%] h-max'>
          <div className='flex flex-row items-center justify-around p-3 bg-indicator-warning rounded-sm'>
            <img src='/images/account-icon.svg' className='h-24 m-1' alt='account-icon'></img>
            <div className='mx-3'>
              <h3 className='font-bold text-xl my-4'>{details.name}</h3>
              <p className='text-sm my-4'>{details.userEntity.username}</p>
            </div>
            <div className='mx-10'>
              <div className='my-4'>
                <img src='/images/email-icon.svg' className='h-6 inline mx-2' alt='email-icon'></img>
                <h4 className='inline'>{details.userEntity.email}</h4>
              </div>
              <div className='my-4'>
                <img src='/images/contact-icon.svg' className='h-6 inline mx-2' alt='contact-icon'></img>
                <h4 className='inline'>{details.mobile}</h4>
              </div>
            </div>
            <div>
              <img src='/images/home-location-icon.svg' className='h-12' alt='location-icon'></img>
            </div>
            <div className='mx-3'>
              <h4 className='font-bold text-md'>House No.</h4>
              <p className='text-sm'>{details.hNo}</p>
            </div>
            <div className='mx-10 my-3'>
              <h4 className='font-bold text-md'>Address Line - 1</h4>
              <p className='text-sm'>{details.line1}</p>
              <h4 className='font-bold text-md'>Address Line - 2</h4>
              <p className='text-sm'>{details.line2}</p>
            </div>
            <div className='mx-10 my-3'>
              <h4 className='font-bold text-md'>City</h4>
              <p className='text-sm'>{details.city}</p>
              <h4 className='font-bold text-md'>Pincode</h4>
              <p className='text-sm'>{details.pincode}</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Personalinfo