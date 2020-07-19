import React, { useEffect } from 'react';
import './Hero.scss'
import dp from './../../assets/dp.jpg'
import Typewriter from 'typewriter-effect/dist/core';
import {gsap} from 'gsap';

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
        timeline.from("#name",0.5,{opacity:0,x:50},"-=0.2");
        timeline.from("#desc",0.5,{opacity:0})
        timeline.from("#sc",0.5,{opacity:0})
        timeline.to("#sc",0.7,{scale:0.7})
    }

    return (
        <div id="hero">
            
            <img src={dp} alt="" id="dp"/>
            <p id="name">Oswin Jerome</p>
            <p id="desc">I'm a <span id="type">Coder.</span></p>
            <div id="sc" onClick={()=>{window.scroll(0,500); console.log("sds");animation()}}>
                <div className='icon-scroll'></div>
            </div>
        </div>
    );
}
 
export default Hero;