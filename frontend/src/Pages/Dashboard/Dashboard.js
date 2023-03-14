import React, { useEffect, useState} from 'react'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Subheader from './Components/Subheader';
import Updates from './Components/Updates';
import SummaryBox from './Components/SummaryBox';
import Auctions from './Components/Auctions';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {apis} from "../../Config/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));


  // useEffect(()=>{
  //   axios.get(apis.getUserDetails, { headers: { Authorization: token}})
  //       .then((res)=>{

  //       })
  //       .catch((err)=>{
  //         navigate("../../login")
  //       });

  // }, [])
  return (
    <>
      <div>
        <header className=''>
          <Header />
        </header>
        <div className='flex flex-row'>
          <Sidebar />
          <div className='flex flex-col w-full'>
            <Subheader />
            <div className='flex flex-row divide-x divide-opacity-60 min-h-[77.7vh]'>
              <div className='basis-3/4 m-1'>
                <div>
                  <SummaryBox />
                </div>
                <div className='mt-2'>
                  <Auctions/>
                </div>
              </div>
              <div className='basis-1/4 bg-primary-yellow-1'>
                <Updates />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard