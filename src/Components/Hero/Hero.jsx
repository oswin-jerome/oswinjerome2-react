import React, { useEffect } from 'react';
import './Hero.scss'
import dp from './../../assets/dp.jpg'
import Typewriter from 'typewriter-effect/dist/core';
import {gsap} from 'gsap';
import ResumeBtn from '../ResumeBtn/ResumeBtn';
// import { ScrollTrigger } from 'gsap/all';

const Hero = () => {


    useEffect(()=>{
        new Typewriter('#type',{
            strings:['Coder.','Web developer.','Learning UI/UX designer.','Geek.'],
            autoStart:true,
            loop:true,

        });
        animation()
    },[])
    
    const animation = ()=>{
        var timeline = new gsap.timeline({onComplete:()=>console.log("Animation "),});
        timeline.from('#dp',{duration:1,opacity:0,scale:0,ease:"step.In"},"+=0.1")
        timeline.from("#dp",{duration:0.5,boxShadow:"0px 0px 0px rgb(173, 173, 173)",ease:'elastic'});
        timeline.from("#name",0.5,{opacity:0,x:50},"-=0.3");
        timeline.from("#desc",0.5,{opacity:0},"-=0.3")
        timeline.from("#sc",0.5,{opacity:0})
        timeline.to("#sc",0.3,{scale:0.7})
        var rb = document.getElementById('getResumeMob')
        timeline.from(rb,0.6,{y:100,opacity:0,scale:0.5},"-=0.5")
    }
 
    return (
        <div id="hero">
            <ResumeBtn />
            <img src={dp} alt="" id="dp"/>
            <h1 id="name">Oswin Jerome</h1>
            <p id="desc">I'm a <span id="type">Coder.</span></p>
            <div id="sc" onClick={()=>{window.scroll(0,500); console.log("sds");animation()}}>
                <div className='icon-scroll'></div>
            </div>

        </div>
    );
}
 
export default Hero;