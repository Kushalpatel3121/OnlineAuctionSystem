import React from 'react'

const Subheader = () => {
  return (
    <>
      <div className='flex flex-row justify-between items-center bg-secondary-sup-gray-4 p-[1%]'>
        <div className='grid grid-cols-3 gap-3 divide-solid divide-x'>
          {/* for New */}
          <div className='min-w-max dropdown inline-block mx-4'>
            <div className='flex flex-row justify-center items-center rounded-sm hover:bg-primary-gray-1 hover:text-primary-white-1'>
              <p className='py-1 px-3'>Auction</p>
              {/* <img src='images/arrow.png' id="arrow" className='w-3 h-3 transition duration-50 ease-in-out hover:rotate-90'></img> */}
            </div>
            <div>
              <ul className='dropdown-menu hidden py-3 px-3 bg-secondary-sup-gray-1/90 absolute rounded-t rounded-b min-w-max left-[15.8%] divide-y divide-solid'>
                <li className='hover:bg-secondary-sup-gray-4 whitespace-no-wrap block py-1 px-1 mb-1 rounded-sm'>Register</li>
                <li className='hover:bg-secondary-sup-gray-4 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>New Auction</li>
              </ul>
            </div>
          </div>
          {/* For Categories */}
          <div className='min-w-max dropdown inline-block'>
            <div className='flex flex-row justify-center items-center rounded-sm hover:bg-primary-gray-1 hover:text-primary-white-1'>
              <p className='py-1 px-3'>Categories</p>
              {/* <img src='images/arrow.png' id="arrow" className='w-3 h-3 transition duration-50 ease-in-out hover:rotate-90'></img> */}
            </div>
            <div>
              <ul className='dropdown-menu hidden py-3 px-3 bg-secondary-sup-gray-1/90 absolute rounded-t rounded-b min-w-max left-[22.8%] divide-y divide-solid'>
                <li className='hover:bg-secondary-sup-gray-4 whitespace-no-wrap block py-1 px-1 mb-1 rounded-sm'>Auction</li>
                <li className='hover:bg-secondary-sup-gray-4 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
                <li className='hover:bg-secondary-sup-gray-4 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
                <li className='hover:bg-secondary-sup-gray-4 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
                <li className='hover:bg-secondary-sup-gray-4 whitespace-no-wrap block py-1 px-1 mt-1 rounded-sm'>Complaint</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <input type="text" name='search' className='focus:outline-none border-2 border-primary-dark-1/50 p-1 w-80 mt-0 mr-10 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' placeholder='Search...'></input>
        </div>
      </div>
    </>
  )
}

export default Subheader