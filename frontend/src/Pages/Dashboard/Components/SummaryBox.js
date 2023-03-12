import React from 'react'

const SummaryBox = () => {
  return (
    <>
        <div className='flex flex-row justify-between justify-items-center'>
            <div className='min-h-max min-w-[33%] bg-primary-dark-1/90 hover:bg-primary-dark-1 p-3 rounded-sm text-primary-white-1'>
                <h2 className='font-bold text-lg'>Total Auctions</h2>
                <p>499</p>
            </div>
            <div className='min-h-max min-w-[33%] bg-primary-dark-1/90 hover:bg-primary-dark-1 p-3 rounded-sm text-primary-white-1'>
                <h2 className='font-bold text-lg'>Registered Auctions</h2>
                <p>34</p>
            </div>
            <div className='min-h-max min-w-[33%] bg-primary-dark-1/90 hover:bg-primary-dark-1 p-3 rounded-sm text-primary-white-1'>
                <h2 className='font-bold text-lg'>Auctions Registered in</h2>
                <p>12</p>
            </div>
        </div>
    </>
  )
}

export default SummaryBox