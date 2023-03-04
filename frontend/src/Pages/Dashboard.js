import React from 'react'
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Subheader from '../Components/Subheader';

const Dashboard = () => {
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
            <div>
              
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard