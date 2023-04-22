import React from 'react'

const Body = () => {
  return (
    <>
        <div className='flex flex-row min-h-[80vh]'>
            <div className='basis-2/5 flex justify-center'>
                <img src='/images/home.jpg' className='w-[50vw]'alt='auction-vector'/>
            </div>
            <div className='basis-3/5 bg-secondary-sup-light-blue-2/40'>
                <div className='text-center text-3xl font-bold mt-[10%] mb-[7%] underline underline-offset-4'>
                    <h2>Welcome to BidSphere</h2>
                </div>
                <div className='text-justify mx-[8%]'>
                    <p>Our platform provides a convenient and efficient way for you to participate in auctions from the comfort of your own home. Our user-friendly interface allows you to easily browse available items, place bids, and track your progress in real-time.</p>
                    <br />
                    <p>Whether you're a seasoned auction-goer or new to the game, our platform is designed to provide a seamless and enjoyable experience. With a wide variety of items up for auction, there's something for everyone.</p>
                    <br />
                    <p>To get started, simply create an account and browse our current auctions. You can search by category or keyword, and once you find an item you're interested in, you can place a bid.</p>
                    <br />
                    <p>Our auctions feature items from trusted sellers, so you can bid with confidence knowing that you are getting high-quality products at a fair price. We also provide detailed information about each item, including photos, descriptions, and any relevant history or background.</p>
                    <br />
                    <p>Join our online auction community today and start bidding on your favorite items!</p>
                    <br />
                </div>
            </div>
        </div>
        <div className='h-4 bg-primary-blue'></div>
    </>
  )
}

export default Body