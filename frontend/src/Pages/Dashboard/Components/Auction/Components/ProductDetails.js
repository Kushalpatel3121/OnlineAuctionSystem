import Divider from "@mui/material/Divider";
import React from "react";

const ProductDetails = ({product}) => {
    return (
        <div className='basis-3/7 bg-primary-yellow-1 max-w-[50%]'>
            <h3 className='m-2 font-bold text-3xl'>Product Details</h3>
            {/* <Divider orientation='horizontal'/> */}
            <hr />
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <img src={'/images/Product/' + product.image}  className='w-[50%] border m-2' alt='Product Image' />
                    <Divider orientation='vertical' sx={{ marginX: '2px' }} />
                    <div className='m-3 overflow-y-auto'>
                        <div className='mb-3  flex flex-col'>
                            <h3 className='font-bold text-lg'>Name : </h3>
                            <p className='break-words'>{product.name}</p>
                        </div>
                        <Divider orientation='horizontal' />
                        <div className='my-3  flex flex-col'>
                            <h3 className='font-bold text-lg'>Category : </h3>
                            <p className='break-words'>{product.category}</p>
                        </div>
                        <Divider orientation='horizontal' />
                        <div className='my-3 flex flex-col'>
                            <h3 className='font-bold text-lg'>Age : </h3>
                            <p className='break-words'>{product.age} years</p>
                        </div>
                        <Divider orientation='horizontal' />
                        <div className='my-3 flex flex-col'>
                            <h3 className='font-bold text-lg'>Base Price : </h3>
                            <p className='break-words'>Rs. {product.basePrice}</p>
                        </div>
                        <Divider orientation='horizontal' />
                    </div>
                </div>
                <div className='flex flex-col m-2'>

                    <div className='mb-3  flex flex-col'>
                        <h3 className='font-bold text-lg'>Description : </h3>
                        <p className='break-words'>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;