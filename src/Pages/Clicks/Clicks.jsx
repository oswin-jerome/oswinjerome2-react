import React, { useState, useEffect } from 'react';
import {getNext,Images} from './../../assets/clicksHelper'
import './Clicks.scss'
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Clicks = () => {

    const [clicksData,setClicksData] = useState([])
    useEffect(()=>{
        getData()
        gsap.registerPlugin(ScrollTrigger);
        // gsap.from('.gallary div',1,{scale:0,opacity:0,stagger:0.5})
        
    },[])
    var i=0;
    const getData =()=>{
        console.log("Fetching")
        var res = getNext(6,i);
        // i++;
        setClicksData([clicksData,...res])

        // setClicksData(Images);
        
    }

    return ( 
        <div>
            <div className="gallary">
                {
                    Images.map((img,i)=>{
                        return(
                            <div onClick={()=>getData()} key={i} className={img.mode}>
                                {/* <img src={img.img} alt=""/> */}
                                <LazyLoadImage src={img.img}></LazyLoadImage>
                            </div>
                        );
                    })
                }
            </div>
        </div>
     );
}
 
export default Clicks;