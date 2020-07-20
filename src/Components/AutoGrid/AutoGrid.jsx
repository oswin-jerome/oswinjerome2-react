import React, { useEffect } from 'react';
import './AutoGrid.scss'
import _ from "lodash";
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
const AutoGrid = (props) => {
    var rows = Math.ceil(props.items.length/5);
    console.log(rows)
    return (
        <div id="autoGrid">
            {
                _.times(rows,(i)=>(
                    <div key={i} className="row">
                        {
                            _.range(i*5,(i*5)+(i+5)).map((j)=>{
                                return props.items.length>j?(
                                    <div key={j} className="icon">
                                        <a target='_blank' href={props.items[j]?.link}><img src={props.items[j]?.icon} alt=""/></a>
                                    </div>
                                ): null

                            })
  
                        }
                    </div>
                ))
            }
            
        </div>
    );
}
 
export default AutoGrid;