import React, { useState } from 'react';
import './NavBar.scss'
import hamMenu from './../../assets/ham_menu.svg';
import ResumeBtn from '../../Components/ResumeBtn/ResumeBtn';
const NavBar = () => {

    const [drawerState,setDrawerState] = useState(true);
    
    return (
        <nav id="navBar">
            {/* Mobile nav */}
            <ResumeBtn/>
            <div className="mobileNav">
                <div id="drawer" onClick={()=>setDrawerState(true)} className={drawerState?"drawer-closed":"drawer-opeaned"}>
                    <ul id="mb-nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Clicks</a></li>
                        <li><a href="#">Achievements</a></li>
                        
                    </ul>
                </div>
                <div className="topbar">
                    <img className="ham" src={hamMenu} alt="" onClick={()=>{
                        setDrawerState(!drawerState);
                        console.log(drawerState);
                    }}/>
                    <p className="logo">Logo</p>
                </div>
            </div>

            {/* Nav */}
            <div className="wdNav">
                <div className="logo">
                    <p className="logo">Logo</p>
                </div>
                <ul id="navList">
                    <li className="navLinks"><a href="#">Home</a></li>
                    <li className="navLinks"><a href="#">Projects</a></li>
                    <li className="navLinks"><a href="#">Clicks</a></li>
                    <li className="navLinks"><a href="#">Achivements</a></li>
                    <li className="navLinks gradientText"><a href="#">Get My Resume</a></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;