import { Outlet, Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="flex flex-row min-h-screen font-source-sans-pro bg-[#fb8500]">
                <div className="bg-[#ffdd87] basis-4/7 text-black rounded-tr-3xl rounded-br-3xl flex items-center justify-center select-none">
                    <img src="/images/Auction-bro.png" alt="Auction" className="w-3/4 transition ease-in-out delay-150 hover:w-4/5 drop-shadow-xl shadow-black"></img>
                </div>
                <div className="bg-[#121930] basis-3/7 text-black flex flex-col items-center justify-center content-around gap-12 ml-3 rounded-tl-3xl rounded-bl-3xl">
                    <div className="flex flex-col content-around backdrop-blur-md bg-white/30 p-6 rounded-2xl shadow-2xl shadow-white/30">
                        <div className="self-center select-none mb-7">
                            <h1 className="text-xl font-bold underline underline-offset-4 text-white">Welcome Back!</h1>
                        </div>
                        <div className="">
                            <form method="POST" className="flex-col justify-items-content text-white">
                                <div className="select-none">
                                    <label for="username"/> Username :
                                    <br/>
                                    <input type="text" name="username" id="username" className="rounded-md mb-6 mt-1 w-64 h-7 border-solid border-2 focus:border-[#219ebc] focus:outline-none text-black p-2 text-sm"></input>
                                </div>
                                
                                <div className="select-none">
                                    <label for="password" /> Password :
                                    <br/>
                                    <input type="password" name="password" id="password" className="rounded-md mb-6 mt-1 w-64 h-7 border-solid border-2 focus:border-[#219ebc] focus:outline-none text-black p-2 text-sm"></input>
                                </div>
                                <div className="select-none">
                                    <input type="submit" className="rounded-md bg-[#67e8f9]/75 text-black justify-self-center border-solid border-2 border-white/70 hover:border-[#121930] hover:bg-[#67e8f9]/60 mt-4 w-64 h-7" value={"Login"}></input>
                                </div>
                            </form>
                        </div>
                        <div className="self-center mt-2 text-gray-400 select-none">
                            <p>Don't have an account?</p>
                            <p className="text-center underline underline-offset-2 text-white/70"><a href="#"><Link to="/signup">Sign Up</Link></a></p>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Login;