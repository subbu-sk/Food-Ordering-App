import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header= ()=>{
    const [btnNamereact, setbtnNamereact] =useState("Login")
     return ( <div className=" flex bg-pink-200  justify-between m-2 p-3 shadow-lg sm:bg-yellow-100 lg:bg-green-200">
            <div className="logo-container w" >
            <img alt="imglogo" className="w-40" src={LOGO_URL}/></div>
            <div className="nav-items flex items-center p-4 m-3">
                <ul className="flex p-2 m-3 list-none">
                    <li className="px-3"><Link  to= "/"> Home</Link></li>
                    <li className="px-3"><Link  to= "/contact">Contact us</Link> </li>
                    <li className="px-3"><Link  to= "/about">About us</Link></li>
                    <li className="px-3">Cart</li>
                    <button className="login" onClick={()=>{btnNamereact === "Login" ? setbtnNamereact("Logout") :setbtnNamereact("Login");
                    }}>{btnNamereact}</button>
                </ul>
            </div>

    </div>
)
}

export default Header;