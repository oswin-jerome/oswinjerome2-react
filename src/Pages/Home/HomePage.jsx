import React, { useEffect } from 'react';
import Hero from '../../Components/Hero/Hero';
import MyStory from '../../Components/MyStory/MyStory';
import './HomePage.scss'
import TechIWork from '../../Components/ForHome/TechIWork/TechIWork';
import LangIKnow from '../../Components/ForHome/LangIKnow/LangIKnow';
import FollowMe from '../../Components/ForHome/FollowMe/FollowMe';
import ContactMe from '../../Components/ForHome/ContactMe/ContactMe';
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';


const HomePage = () => {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        var mods = document.querySelectorAll('.ha');
        mods.forEach((mod)=>{
            gsap.from(mod,1,{scrollTrigger:{
                trigger:mod,
                scrub:true,
                start:"center bottom",
                end:"center 60%",
                // markers:true
                
            },opacity:0,scale:0.5})
        })


    },[])

    return (
        <div id="homePage">
            <div className="c"><Hero></Hero></div>
            {/* <div className="c"><MyStory></MyStory></div> */}
            <div className="c ha"><TechIWork></TechIWork></div>
            <div className="c ha" id="ann"><LangIKnow></LangIKnow></div>
            <div className="c ha"><FollowMe></FollowMe></div>
            <div className="c ha"><ContactMe></ContactMe></div>
        </div>
    );
}
 
export default HomePage;