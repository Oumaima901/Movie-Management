
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./topbar.scss";
const Topbar = () => {
    const[isScrolled,setIsScrolled]= useState(false);
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "navbar scrolled" : "topbar"}>
            <div className="container">
                <div className="left">
                <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30" alt=""></img>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
                </div>
                <div className="right">
                 <Search  className="icon"/>
                <span>KID</span>
                <Notifications  className="icon"/>
               <img src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png" alt=""></img>
               <div className="profile">
               <ArrowDropDown  className="icon"/>
               <div className="options">
                   <span>Settings</span>
                   <span>Logout</span>
               </div>
               </div>
               
                </div>
            </div>
        </div>
    )
}

export default Topbar

