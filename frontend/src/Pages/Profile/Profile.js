import React from 'react'

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Personalinfo from './Components/Personalinfo';

const Dashboard = () => {
  return (
    <>
      <div>
        <header className=''>
          <Header />
        </header>
        <div className='flex flex-row'>
          <Sidebar />
          <div className='flex flex-col w-full m-2'>
            <Personalinfo/>
            <div>
              
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard