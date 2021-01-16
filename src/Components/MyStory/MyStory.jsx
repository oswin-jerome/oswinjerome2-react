import React from 'react';
import './MyStory.scss'
import Heading from '../Heading/Heading';
// import gsap from 'gsap/gsap-core';
// import { ScrollTrigger } from 'gsap/all';
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
                <Heading  primary1="About me"></Heading>
            </div>
        </div>
    );
}
 
export default MyStory;