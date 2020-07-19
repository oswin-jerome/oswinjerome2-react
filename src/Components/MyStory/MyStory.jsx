import React, { useEffect } from 'react';
import './MyStory.scss'
import Heading from '../Heading/Heading';
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
const MyStory = () => {
    
    // useEffect(()=>{
    //     gsap.registerPlugin(ScrollTrigger)
    //     gsap.from('.story-ani',1,{scrollTrigger:{
    //         trigger:'.story-ani',
    //         start:'top center',
    //         markers:true
    //     },opacity:0,x:-200,stagger:0.3})
    // },[])
    return (
        <div id="myStory">
            <div className='story-ani'>
            <Heading  primary1="Story"></Heading>
            </div>
            <p className='story-ani'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempora atque voluptatem aperiam dolorum voluptate! Iure magnam explicabo praesentium? Nulla culpa omnis laboriosam quisquam aut voluptas, et necessitatibus dolorum facilis nihil amet commodi? Debitis, dolorem at? Cupiditate provident repudiandae quas! Eius veritatis consequatur blanditiis ullam molestiae fugit aut sint quis.</p>
        </div>
    );
}
 
export default MyStory;