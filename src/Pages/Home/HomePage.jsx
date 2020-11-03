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
import Testimonials from '../../Components/ForHome/Testimonials/Testimonials';
import Loader from '../../Components/Loader/Loader';


const HomePage = () => {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        var mods = document.querySelectorAll('.ha');
        mods.forEach((mod)=>{
            gsap.from(mod,0.5,{scrollTrigger:{
                trigger:mod,
                scrub:true,
                start:"center bottom",
                end:"center 60%",
                // markers:true
                
            },opacity:0,scale:0.5,skewX:"35deg"})

            console.log(mod.getElementsByClassName("icon"))
            // gsap.fromTo(".icon",0.5,{scrollTrigger:{
            //     trigger:mod,
            //     scrub:false,
            //     end:"center top",
            //     start:"center bottom",
            //     markers:true
                
            // },opacity:0,scale:2,stagger:0.2},{opacity:1,scale:1})

            gsap.fromTo(mod.getElementsByClassName("icon"),{
                opacity:0,scale:2
            },{
                scrollTrigger:{
                    trigger:mod,
                    scrub:true,
                end:"center top",
                start:"center bottom",
                markers:true
                },  
                opacity:1,scale:1,stagger:0.2
            })
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
            <div className="c ha"><Testimonials></Testimonials></div>
        </div>
    );
}
 
export default HomePage;