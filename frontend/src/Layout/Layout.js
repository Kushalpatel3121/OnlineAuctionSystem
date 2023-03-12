import React from 'react'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

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
            <div className='flex flex-row bg-secondary-sup-gray-3/70 divide-x divide-opacity-60 min-h-[77.7vh]'>
              <div className='basis-3/4'>
              </div>
              <div className='basis-1/4 bg-primary-yellow-1'>
                <Updates/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard