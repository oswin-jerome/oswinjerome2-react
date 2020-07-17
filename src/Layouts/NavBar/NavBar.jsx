import React from 'react';
import './NavBar.scss'
import hamMenu from './../../assets/ham_menu.svg';
const NavBar = () => {
    return (
        <nav id="navBar">
            {/* Mobile nav */}
            <div className="mobileNav">
                <div className="topbar">
                    <img className="ham" src={hamMenu} alt=""/>
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