import React, { useEffect, useState } from 'react';

const ResumeBtn = () => {
    const [visible,setVisible] = useState(true);
    useEffect(()=>{
        window.addEventListener('scroll',(e)=>{
            if(window.pageYOffset==0){
                setVisible(true);
            }else{
                setVisible(false);
            }
        },true)
    },[])
    return (  

        <a id="getResumeMob" href="#" className={visible?"show":"hide"} onScrollCapture={(e)=>console.log(e)}>Get My Resume</a>

    );
}
 
export default ResumeBtn;