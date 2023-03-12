// import React from 'react';
import axios from "axios";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { apis } from "../Config/api";
import "react-toastify/dist/ReactToastify.css"

const Login = () => {

    let [loginInfo, setLoginInfo] = useState();

    let changeInfo = (e) => {
        setLoginInfo(values => ({...values, [e.target.name]: e.target.value}))
    }

    let login = (e) => {
        e.preventDefault();

        console.log(loginInfo)

        axios.post(apis.login, loginInfo)
        .then( (res) => {
            toast.success("Login Successful", {position: "bottom-right"})
        })
        .catch( (err) => {
            toast.error("Username or Password is incorrect", {position: "bottom-right"})
        })
    }

    return (
        <>
            <div className='flex flex-row min-h-screen'>
                <div className='basis-8/12 bg-login-bg-2 bg-cover'>
                    {/* <div className='min-h-screen bg-primary-white-1 opacity-60 backdrop-blur-md drop-shadow-sm'></div> */}
                    <div className='min-h-screen bg-gradient-to-br from-secondary-sup-light-blue-2/80 to-primary-blue-light/80 opacity-80'></div>
                </div>
                <div className='basis-4/12 bg-secondary-sup-gray-4 flex flex-row justify-center items-center'>
                    <div className=''>
                        <form className=''>
                            <div className="select-none mb-7">
                                <label for="username" className='text-md font-bold'> Username : </label>
                                <br />
                                <input type="text" name='username' className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={changeInfo} required></input>
                            </div>

                            <div className="select-none mb-5">
                                <label for="password" className="text-md font-bold"> Password : </label>
                                <br />
                                <input type="password" name='password' className='focus:outline-none border-b-2 border-b-primary-blue p-2 w-64 mt-0 rounded-sm bg-secondary-sup-gray-4 focus:border-b-2 text-sm' onChange={changeInfo} required></input>

                            </div>

                            <div className="select-none">
                                {/* <button type='submit'> Login </button> */}
                                <input type="submit" value={"Login"} className="rounded-sm text-md text-primary-white-1 justify-self-center border-solid border-2 border-primary-white-1 mt-4 w-64 h-7 bg-primary-blue/75 hover:bg-primary-blue-light" onClick={login}></input>
                            </div>

                            <div className="text-center mt-4 text-primary-gray-1 text-sm select-none">
                                <p>Don't have an account?</p>
                                <p className="underline underline-offset-2 text-white/70"><a href="#"><Link to="/signup">Sign Up</Link></a></p>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login;