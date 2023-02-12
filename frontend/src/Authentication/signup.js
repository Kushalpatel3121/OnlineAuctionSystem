import { Outlet, Link } from "react-router-dom";
import $ from 'jquery';

function Signup(){
    return (
        <>
            <div className="flex flex-row min-h-screen font-source-sans-pro bg-[#fb8500]">
                <div className="bg-[#ffdd87] basis-4/7 text-black rounded-tr-3xl rounded-br-3xl flex items-center justify-center select-none">
                    <img src="/images/Auction-bro.png" alt="Auction" className="w-3/4 transition ease-in-out delay-150 hover:w-4/5 drop-shadow-xl shadow-black"></img>
                </div>
                <div className="bg-[#121930] basis-3/7 text-black flex flex-col items-center justify-center content-around ml-3 rounded-tl-3xl rounded-bl-3xl">
                    <div className="flex flex-col content-around backdrop-blur-md bg-white/30 p-6 rounded-2xl shadow-2xl shadow-white/30">
                        {/* <div className="self-center select-none mb-7">
                            <h1 className="text-xl font-bold underline underline-offset-4 text-white">Welcome Back!</h1>
                        </div> */}
                        <div className="">
                            <form method="POST" className="form-1 flex-col justify-items-content text-white">
                                <div className="select-none">
                                    <label for="firstname"/> Firstname :
                                    <br/>
                                    <input type="text" name="firstname" id="firstname" className="rounded-md mb-3 mt-1 w-64 h-7 border-solid border-2 focus:border-[#219ebc] focus:outline-none text-black p-2 text-sm"></input>
                                </div>

                                <div className="select-none">
                                    <label for="middlename"/> Middlename :
                                    <br/>
                                    <input type="text" name="middlename" id="middlename" className="rounded-md mb-3 mt-1 w-64 h-7 border-solid border-2 focus:border-[#219ebc] focus:outline-none text-black p-2 text-sm"></input>
                                </div>

                                <div className="select-none">
                                    <label for="lastname"/> Lastname :
                                    <br/>
                                    <input type="text" name="lastname" id="lastname" className="rounded-md mb-3 mt-1 w-64 h-7 border-solid border-2 focus:border-[#219ebc] focus:outline-none text-black p-2 text-sm"></input>
                                </div>

                                <div className="select-none">
                                    <label for="mobile"/> Mobile :
                                    <br/>
                                    <input type="tel" name="mobile" id="mobile" className="rounded-md mb-3 mt-1 w-64 h-7 border-solid border-2 focus:border-[#219ebc] focus:outline-none text-black p-2 text-sm"></input>
                                </div>

                                <div className="select-none">
                                    <label for="house"/> House No. :
                                    <br/>
                                    <input type="text" name="lastname" id="lastname" className="rounded-md mb-3 mt-1 w-64 h-7 border-solid border-2 focus:border-[#219ebc] focus:outline-none text-black p-2 text-sm"></input>
                                </div>

                                <div className="select-none">
                                    <label for="address1"/> Address line 1 :
                                    <br/>
                                    <textarea class="resize-none rounded-md mb-3 mt-1 w-64 h-7 border-solid border-2 focus:border-[#219ebc] focus:outline-none text-black p-2 text-sm"></textarea>
                                </div>

                                <div className="select-none">
                                    <label for="address2"/> Address line 2 :
                                    <br/>
                                    <textarea class="resize-none rounded-md mb-3 mt-1 w-64 h-7 border-solid border-2 focus:border-[#219ebc] focus:outline-none text-black p-2 text-sm"></textarea>
                                </div>

                                <div className="select-none">
                                    <label for="city"/> City :
                                    <br/>
                                    <input type="text" name="city" id="city" className="rounded-md mb-3 mt-1 w-64 h-7 border-solid border-2 focus:border-[#219ebc] focus:outline-none text-black p-2 text-sm"></input>
                                </div>

                                <div className="select-none">
                                    <label for="pincode"/> Pincode :
                                    <br/>
                                    <input type="text" name="pincode" id="pincode" pattern="" className="rounded-md mb-3 mt-1 w-64 h-7 border-solid border-2 focus:border-[#219ebc] focus:outline-none text-black p-2 text-sm"></input>
                                </div>
                                
                                <div className="select-none">
                                    <input type="submit" className="rounded-md bg-[#67e8f9]/75 text-black justify-self-center border-solid border-2 border-white/70 hover:border-[#121930] hover:bg-[#67e8f9]/60 mt-4 w-64 h-7" value={"Sign Up"}></input>
                                </div>
                            </form>
                        </div>
                        <div className="self-center mt-2 text-gray-400 select-none">
                            <p>Already have an account?</p>
                            <p className="text-center underline underline-offset-2 text-white/70"><a href="#"><Link to="/login">Sign In</Link></a></p>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Signup;