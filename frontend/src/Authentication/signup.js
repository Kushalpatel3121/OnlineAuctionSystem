// import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

let title = ["Login Details","Personal Details","Address Details"];

const Signup = () => {
    const [page,setPage] = useState(0);
    const [details,setDetails] = useState({
        username:"",
        password:"",
        fullname:"",
        email:"",
        contactno:"",
        houseno:"",
        address1:"",
        address2:"",
        city:"",
        pincode:""
    });
    const[cpassword,setCpassword] = useState("");

    const detailsChanged = (e) => {
        setDetails(values => ({...values,[e.target.name]:e.target.value}))
    }

  return (
    <>
        <div className='flex flex-row min-h-screen'>
            <div className='basis-8/12 bg-signup-bg-1 bg-cover'>
                {/* <div className='min-h-screen bg-primary-white-1 opacity-60 backdrop-blur-md drop-shadow-sm'></div> */}
                <div className='min-h-screen bg-gradient-to-br from-primary-gray-1/70 to-primary-dark-1/70'></div>
            </div>
            <div className='basis-4/12 bg-secondary-sup-gray-4 flex flex-row justify-center items-center'>
                <div className=''>
                    <h2 className="text-center select-none text-2xl font-bold mb-[10%] underline underline-offset-4">{title[page]}</h2>
                    <form className='' id="signupform">
                        { page==0 && 
                            <>
                                <div className="select-none mb-7">
                                    <label for="username" className='text-md font-bold'> Username : </label>
                                    <br/>
                                    <input type="text" name='username' value={details.username} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                </div>

                                <div className="select-none mb-5">
                                    <label for="password" className="text-md font-bold"> Password : </label>
                                    <br/>
                                    <input type="password" name='password' value={details.password} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                </div>

                                <div className="select-none mb-7">
                                    <label for="confirmpassword" className="text-md font-bold">Confirm Password : </label>
                                    <br/>
                                    <input type="password" name='confirmpassword' value={cpassword} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={(e) => {setCpassword(e.target.value)}} required></input>
                                </div> 
                            </> 
                        }

                        { page==1 &&
                            <>
                                <div className="select-none mb-7">
                                    <label for="fullname" className='text-md font-bold'> Fullname : </label>
                                    <br/>
                                    <input type="text" name='fullname' value={details.fullname} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                </div>

                                <div className="select-none mb-7">
                                    <label for="email"  className='text-md font-bold'> Email : </label>
                                    <br/>
                                    <input type="email" name='email' value={details.email} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                </div>

                                <div className="select-none mb-7">
                                    <label for="contactno" className='text-md font-bold'> Contact No. : </label>
                                    <br/>
                                    <input type="text" name='contactno' value={details.contactno} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                </div>
                            </>
                        }   

                        { page==2 &&
                            <>
                                <div className="select-none mb-4">
                                    <label for="houseno" className='text-md font-bold'> House No. : </label>
                                    <br/>
                                    <input type="text" name='houseno' value={details.houseno} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                </div>

                                <div className="select-none mb-4">
                                    <label for="address1" className='text-md font-bold'> Address line 1 : </label>
                                    <br/>
                                    <input type="text" name='address1' value={details.address1} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                </div>

                                <div className="select-none mb-4">
                                    <label for="address2" className='text-md font-bold'> Address line 2 : </label>
                                    <br/>
                                    <input type="text" name='address2' value={details.address2} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                </div>

                                <div className="select-none mb-4">
                                    <label for="city" className='text-md font-bold'> City : </label>
                                    <br/>
                                    <input type="text" name='city' value={details.city} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                </div>

                                <div className="select-none mb-4">
                                    <label for="pincode" className='text-md font-bold'> Pincode : </label>
                                    <br/>
                                    <input type="number" name='pincode' value={details.pincode} min="100000" max="999999" className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                </div>
                            </>
                        }   

                        <div className="select-none flex flex-row justify-around">
                            { page!=0 && 
                                <button className="rounded-sm border-2 border-solid text-primary-white-1 border-primary-white-1 px-[10%] py-[2%] bg-primary-blue hover:bg-primary-blue-light" onClick={(e)=>{e.preventDefault(); setPage((currPage) => currPage - 1);}}>Prev
                                </button> 
                            }
                            
                            { page!=2 &&
                                <button type="submit" form="signupform" className="rounded-sm border-2 border-solid text-primary-white-1 border-primary-white-1 px-[10%] py-[2%] bg-primary-blue hover:bg-primary-blue-light" onClick={(e)=>{e.preventDefault(); setPage((currPage) => currPage + 1);}}>Next
                                </button>
                            }

                            { page==2 &&
                                <button type="submit" form="signupform" className="rounded-sm border-2 border-solid text-primary-white-1 border-primary-white-1 px-[10%] py-[2%] bg-primary-blue hover:bg-primary-blue-light">Submit
                                </button>
                            }                   
                        </div>

                        <div className="text-center mt-3 text-primary-gray-1 text-sm select-none">
                            <p>Already have an account?</p>
                            <p className="underline underline-offset-2 text-white/70"><a href="#"><Link to="/login">Sign In</Link></a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup;