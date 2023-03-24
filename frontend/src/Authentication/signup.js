// import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { apis } from "../Utils/api";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let title = ["Login Details","Personal Details","Address Details"];

const Signup = () => {
    let [page,setPage] = useState(0);
    let [details,setDetails] = useState({
        username:"",
        password:"",
        name:"",
        email:"",
        mobile:"",
        hNo:"",
        line1:"",
        line2:"",
        city:"",
        pincode:""
    });
    
    let [error, setError] = useState({
        "username":"", 
        "email":"",
        "password":"",
        "cpassword":"",
        "name":"",
        "mobile":"",
        "hNo":"",
        "line1":"",
        "line2":"",
        "city":"",
        "pincode":""
    });
    
    
    let [cpassword,setCpassword] = useState("");
    
    const detailsChanged = (e) => {
        setError(values => ({...values, [e.target.name]:""}))
        setDetails(values => ({...values,[e.target.name]:e.target.value}))
    }
    
    let submitClick = (e) => {
        e.preventDefault();
        
        console.log(errorCheck())
        if(errorCheck() == true)
            return;
        
   
        axios.post(apis.signup, details)
        .then((response)=> {
            if(response.data)
            {
                toast.success("Register successfully", {position:"bottom-right"});
            }
            console.log(response.data);
        })
        .catch((error) => {

            toast.error(error.message, {position:"bottom-right"});
            console.log("in error", error);
            
        })
    }
    
    let errorCheck =  async(e) => {
        let flag = false;
        if(page == 0)
        {
            if(details.username == "")
            {
                setError(values => ({...values, "username":"Username is required"}));
                flag = true;
            }
            
            if(details.password == "")
            {
                setError(values => ({...values, "password":"Password is required"}));
                flag = true;
            }
            
            if(details.password != cpassword)
            {
                setError(values => ({...values, "cpassword":"Password and confirm password must match"}))
                flag = true;
            }
            
            if(details.username)
            {
                await axios.post(apis.usernameCheck, {username: details.username})
                .then((response)=>{
                    if(response.data == true)
                    {
                        setError(values => ({...values, "username":"Username is already taken"}));
                        flag = true;
                    }
                    
                })
                .catch((error) =>{
                    console.log(error);
                });
            }
        }
        if(page == 1)
        {
            if(details.name == "")
            {
                setError(values => ({...values, "name":"Name is required"}))
                flag = true;
            }
            if(details.email == "")
            {
                setError(values => ({...values, "email":"Email is required"}))
                flag = true;
            }
            if(details.mobile == "")
            {
                setError(values => ({...values, "mobile":"Contact no is required"}))
                flag = true;
            }
            
            if(details.email)
            {
                await axios.post(apis.emailCheck, {username: details.email})
                .then((response) =>{
                    if(response.data == true)
                    {
                        setError(values => ({...values, "email":"Email is already registered"}))
                        flag = true;
                    }
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        }
        if(page == 2)
        {
            if(details.hNo == "")
            {
                setError(values => ({...values, "hNo":"House No is required"}))
                flag = true;
                
            }
            if(details.line1 == "")
            {
                setError(values => ({...values, "line1":"Address Line1 is required"}))
                flag = true;
                
            }
            if(details.line2 == "")
            {
                setError(values => ({...values, "line2":"Address Line2 is required"}))
                flag = true;
                
            }
            if(details.city == "")
            {
                setError(values => ({...values, "city":"House is required"}))
                flag = true;
                
            }
            if(details.pincode == "")
            {
                setError(values => ({...values, "pincode":"Pincode is required"}))
                flag = true;

            }
        }


        return flag;
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
                                    <input type="text" name='username' value={details.username} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged}  required></input>
                                    <br/>
                                    <span style={{color: "red", fontSize:"12px"}}>{error.username}</span>
                                </div>

                                <div className="select-none mb-5">
                                    <label for="password" className="text-md font-bold"> Password : </label>
                                    <br/>
                                    <input type="password" name='password' value={details.password} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                    <br />
                                    <span style={{color: "red", fontSize:"12px"}}>{error.password}</span>
                                </div>

                                <div className="select-none mb-7">
                                    <label for="confirmpassword" className="text-md font-bold">Confirm Password : </label>
                                    <br/>
                                    <input type="password" name='confirmpassword' value={cpassword} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={(e) => {
                                        setCpassword(e.target.value);
                                        setError(values => ({...values, "cpassword":""})) 
                                    }} required></input>
                                    <br />
                                    <span style={{color: "red", fontSize:"12px"}}>{error.cpassword}</span>

                                </div> 
                            </> 
                        }

                        { page==1 &&
                            <>
                                <div className="select-none mb-7">
                                    <label for="name" className='text-md font-bold'> Fullname : </label>
                                    <br/>
                                    <input type="text" name='name' value={details.name} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                    <br/><span style={{color: "red", fontSize:"12px"}}>{error.name}</span>
                                </div>

                                <div className="select-none mb-7">
                                    <label for="email"  className='text-md font-bold'> Email : </label>
                                    <br/>
                                    <input type="email" name='email' value={details.email} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                    <br/><span style={{color: "red", fontSize:"12px"}}>{error.email}</span>
                                </div>

                                <div className="select-none mb-7">
                                    <label for="mobile" className='text-md font-bold'> Contact No. : </label>
                                    <br/>
                                    <input type="text" name='mobile' value={details.mobile} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                    <br/><span style={{color: "red", fontSize:"12px"}}>{error.mobile}</span>
                                </div>
                            </>
                        }   

                        { page==2 &&
                            <>
                                <div className="select-none mb-4">
                                    <label for="hNo" className='text-md font-bold'> House No. : </label>
                                    <br/>
                                    <input type="text" name='hNo' value={details.hNo} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                    <br/><span style={{color: "red", fontSize:"12px"}}>{error.hNo}</span>
                                </div>

                                <div className="select-none mb-4">
                                    <label for="line1" className='text-md font-bold'> Address line 1 : </label>
                                    <br/>
                                    <input type="text" name='line1' value={details.line1} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                    <br/><span style={{color: "red", fontSize:"12px"}}>{error.line1}</span>
                                </div>

                                <div className="select-none mb-4">
                                    <label for="line2" className='text-md font-bold'> Address line 2 : </label>
                                    <br/>
                                    <input type="text" name='line2' value={details.line2} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                    <br/><span style={{color: "red", fontSize:"12px"}}>{error.line2}</span>
                                </div>

                                <div className="select-none mb-4">
                                    <label for="city" className='text-md font-bold'> City : </label>
                                    <br/>
                                    <input type="text" name='city' value={details.city} className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                    <br/><span style={{color: "red", fontSize:"12px"}}>{error.city}</span>
                                </div>

                                <div className="select-none mb-4">
                                    <label for="pincode" className='text-md font-bold'> Pincode : </label>
                                    <br/>
                                    <input type="number" name='pincode' value={details.pincode} min="100000" max="999999" className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={detailsChanged} required></input>
                                    <br/><span style={{color: "red", fontSize:"12px"}}>{error.pincode}</span>
                                </div>
                            </>
                        }   

                        <div className="select-none flex flex-row justify-around">
                            { page!=0 && 
                                <button className="rounded-sm border-2 border-solid text-primary-white-1 border-primary-white-1 px-[10%] py-[2%] bg-primary-blue hover:bg-primary-blue-light" onClick={async (e)=>{
                                    e.preventDefault();
                                        setPage((currPage) => currPage - 1);}}>Prev
                                </button> 
                            }
                            
                            { page!=2 &&
                                <button type="submit" form="signupform" className="rounded-sm border-2 border-solid text-primary-white-1 border-primary-white-1 px-[10%] py-[2%] bg-primary-blue hover:bg-primary-blue-light" onClick={async (e)=>{
                                    e.preventDefault();
                                    let check = await errorCheck();
                                    if(!check)
                                        setPage((currPage) => currPage + 1);
                                    }}>Next
                                </button>
                            }

                            { page==2 &&
                                <button type="submit" form="signupform" className="rounded-sm border-2 border-solid text-primary-white-1 border-primary-white-1 px-[10%] py-[2%] bg-primary-blue hover:bg-primary-blue-light" onClick={submitClick}>Submit
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

        <ToastContainer />
    </>
  )
}

export default Signup;