import React from 'react';
import './AutoGrid.scss'
import _ from "lodash";
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
                                        <img src={props.items[j]?.icon} alt=""/>
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