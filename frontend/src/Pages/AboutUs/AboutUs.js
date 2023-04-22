import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Layout/Components/Footer';

const AboutUs = () => {
  return (
    <>
      <header>
        <div className='flex flex-row bg-primary-blue text-primary-white-1 min-h-[13vh] min-w-full p-[1%] justify-between items-center'>
          <div className='mx-10 flex flex-row items-center'>
            <img src='images/auction-logo-1.png' alt='Auction-logo' className='inline w-16'></img>
            <h3 className='inline text-2xl mx-2'>BidSphere</h3>
          </div>
          <div className='flex flex-row mx-9 items-center'>
            <ul className='flex flex-row list-none mr-9'>
              <li className='mr-10'><Link to='/'>Home</Link></li>
              {/* <li className=''><a href=''>Contact</a></li> */}
            </ul>
          </div>
        </div>
      </header>
      <div className='flex flex-row'>
        <div className='basis-1/2'>
          <div className='text-center my-10 text-5xl bg-secondary-sup-light-blue-2/40 p-3 rounded-md'>
            <h1 className=''>About Us</h1>
          </div>
          <div className='m-10 text-md'>
            <p>Welcome to our Online Auction System!</p>
            <br />
            <p>
              Our platform is designed to provide a seamless and user-friendly auction experience for both buyers and sellers. Whether you are a collector looking to add to your collection or a seller looking to liquidate inventory, our platform is the perfect solution for you.
            </p>
            <br />
            <p>
              At our Online Auction System, we believe in transparency and fairness. That is why we have implemented a strict set of guidelines and policies that all users must adhere to. We want to ensure that every transaction is conducted with honesty and integrity.We believe that everyone deserves access to the best products and deals, no matter where they live. With our platform, we enable sellers to reach a global audience, while buyers have access to a vast selection of products from all around the world. Our system provides a fair and transparent bidding process that ensures that all participants have an equal chance to win their desired items.
            </p>
            <br />
            <p>
              Our platform offers a wide variety of items for auction, including but not limited to antiques, collectibles, jewelry, art, and much more.
            </p>
            <br />
            <p>
              We are proud to offer our platform to users worldwide and are committed to creating a global community of buyers and sellers. Whether you're looking to buy or sell items, we hope that our platform provides you with a seamless and enjoyable experience.
            </p>
            <br />
            <p>
              Thank you for choosing Online Auction.
            </p>
          </div>
        </div>
        <div className='basis-1/2 mr-8'>
          <img src='/images/Auction-bro.png' className='w-full' />
        </div>
      </div>
      <div className='h-4 bg-primary-blue'></div>
    </>
  )
}

export default AboutUs