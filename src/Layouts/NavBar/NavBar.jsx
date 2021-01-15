import React, { useState, useEffect } from 'react';
import './NavBar.scss'
import hamMenu from './../../assets/ham_menu.svg';
import ResumeBtn from '../../Components/ResumeBtn/ResumeBtn';
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import resume from './../../assets/Oswin_Jerome.pdf'
import $ from 'jquery'
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
        // t.from('#mb-nav-links li',0.5,{opacity:0,x:'-100%',skewX:30,stagger:0.2})
        t.fromTo("#mb-nav-links li",{opacity:0,x:'-100%',skewX:30,stagger:0.2},{duration:0.5,opacity:1,x:'0',skewX:0,stagger:0.2})
        t.play()
    }

    $(document).ready(()=>{
        // $(window).scroll(()=>{
        //     if(!$(window).scrollTop()){
        //         $('#navBar').removeClass('fixed')
        //     }else{
        //         $('#navBar').addClass('fixed')

        //     }
        // })
    })

    return (
        <nav id="navBar" className="">
            {/* Mobile nav */}
            
            <div className="mobileNav">
                <div id="drawer" onClick={()=>{
                    t = gsap.timeline({
                        onComplete:()=>setDrawerState(true)
                    });
                    t.to('#mb-nav-links li',0.3,{opacity:0,x:'-100%',skewX:30,stagger:0.1})
                    
                }} className={drawerState?"drawer-closed":"drawer-opeaneds"}>
                    <ul id="mb-nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        {/* <li><Link to="/clicks">Clicks</Link></li> */}
                        <li><Link to="/achievements">Achievements</Link></li>
                        
                    </ul>
                </div>
                <div className="topbar">
                    <img className="ham" src={hamMenu} alt="" onClick={()=>{
                        animateMobIn();
                        setDrawerState(!drawerState);
                        console.log(drawerState);
                    }}/>
                    <p className="logo">OJ</p>
                </div>
            </div>

            {/* Nav */}
            <div className="wdNav">
                <div className="logo">
                    <p className="logo">OJ</p>
                </div>
                <ul id="navList">
                    <li className="navLinks"><Link to="/">Home</Link></li>
                    <li className="navLinks"><Link to="/projects">Projects</Link></li>
                    {/* <li className="navLinks"><Link to="/clicks">Clicks</Link></li> */}
                    <li className="navLinks"><Link to="/achievements">Achivements</Link></li>
                    <li className="navLinks gradientText"><a href={resume}>Get My Resume</a></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;