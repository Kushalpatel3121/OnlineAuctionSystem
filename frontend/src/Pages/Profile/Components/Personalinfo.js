import React from 'react'

const Personalinfo = () => {
  return (
    <>
      <div className='w-[100%] h-max'>
        <div className='flex flex-row items-center justify-around p-3 bg-indicator-warning rounded-sm'>
          <img src='/images/account-icon.svg' className='h-24 m-1' alt='account-icon'></img>
          <div className='mx-3'>
            <h3 className='font-bold text-xl my-4'>FullName</h3>
            <p className='text-sm my-4'>Username</p>
          </div>
          <div className='mx-10'>
            <div className='my-4'>
              <img src='/images/email-icon.svg' className='h-6 inline mx-2' alt='email-icon'></img>
              <h4 className='inline'>user112@gmail.com</h4>
            </div>
            <div className='my-4'>
              <img src='/images/contact-icon.svg' className='h-6 inline mx-2' alt='contact-icon'></img>
              <h4 className='inline'>+919987229854</h4>
            </div>
          </div>
          <div>
            <img src='/images/home-location-icon.svg' className='h-12' alt='location-icon'></img>
          </div>
          <div className='mx-3'>
            <h4 className='font-bold text-md'>House No.</h4>
            <p className='text-sm'>23</p>
          </div>
          <div className='mx-10 my-3'>
            <h4 className='font-bold text-md'>Address Line - 1</h4>
            <p className='text-sm'>23</p>
            <h4 className='font-bold text-md'>Address Line - 2</h4>
            <p className='text-sm'>Krishna Residency</p>
          </div>
          <div className='mx-10 my-3'>
            <h4 className='font-bold text-md'>City</h4>
            <p className='text-sm'>Surat</p>
            <h4 className='font-bold text-md'>Pincode</h4>
            <p className='text-sm'>395001</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Personalinfo