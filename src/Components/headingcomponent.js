import { useState } from "react";
import image from "./../images/logo.png";
import "./../Style/headingcomponent.css";

export const HeadingComponent=()=>{
    const [btn_name,setbtn_name]=useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={image}></img>
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                    <div className="button-class">
                    <button className="login-btn"
                    onClick={()=>{
                        if(btn_name==="Login")
                            {
                            setbtn_name("Logout");
                            }
                        else{
                            setbtn_name("Login");
                        }
                    }}>{btn_name}</button></div>
                </ul>
            </div>
        </div>
        
        
    )
}