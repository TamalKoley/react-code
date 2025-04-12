import { useState,useEffect } from "react";
import image from "./../images/logo.png";
import "./../Style/headingcomponent.css";
import { Link } from "react-router-dom";

export const HeadingComponent=()=>{
    const [btn_name,setbtn_name]=useState("Login");
    //console.log("header renders");
    useEffect(()=>{
        console.log("header use effect called")
    });
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={image}></img>
            </div>
            <div className="nav-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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