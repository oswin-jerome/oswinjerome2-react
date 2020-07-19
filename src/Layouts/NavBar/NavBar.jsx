import React, { useState, useEffect } from 'react';
import './NavBar.scss'
import hamMenu from './../../assets/ham_menu.svg';
import ResumeBtn from '../../Components/ResumeBtn/ResumeBtn';
import { gsap } from "gsap";
const NavBar = () => {

    const [drawerState,setDrawerState] = useState(true);

    useEffect(()=>{
        // Auto activated animation
        var t = gsap.timeline();
        t.from('.navLinks',0.5,{opacity:0,y:'-100%',ease:"easeInOut",stagger:0.2},"+=0.5")
        t.play()
    },[])
    var t;
    const animateMobIn = ()=>{
        t = gsap.timeline();
        t.from('#mb-nav-links li',0.5,{opacity:0,x:'-100%',skewX:30,stagger:0.2})
        t.play()
    }

    return (
        <nav id="navBar">
            {/* Mobile nav */}
            <ResumeBtn/>
            <div className="mobileNav">
                <div id="drawer" onClick={()=>{
                    t = gsap.timeline({
                        onComplete:()=>setDrawerState(true)
                    });
                    t.to('#mb-nav-links li',0.3,{opacity:0,x:'-100%',skewX:30,stagger:0.1})
                    
                }} className={drawerState?"drawer-closed":"drawer-opeaneds"}>
                    <ul id="mb-nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Clicks</a></li>
                        <li><a href="#">Achievements</a></li>
                        
                    </ul>
                </div>
                <div className="topbar">
                    <img className="ham" src={hamMenu} alt="" onClick={()=>{
                        animateMobIn();
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