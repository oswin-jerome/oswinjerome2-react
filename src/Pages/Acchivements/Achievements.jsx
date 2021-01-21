import React, { useEffect } from 'react';
import achievementData from './../../assets/achievementHelper';
import AchievementCategories from '../../Components/AchievementsCategories/AchievementCategories';
import gsap from 'gsap/gsap-core';
import {Helmet} from 'react-helmet'
const Achievements = () => {

    useEffect(()=>{
        var timeline = new gsap.timeline();
        timeline.from('.Projects',0.5,{opacity:0,x:20},'+=0.3')
        timeline.from('.ac_imgs div',0.5,{opacity:0,scale:0.9,stagger:0.3})

        // setTimeout(()=>document.querySelector('.loader').remove(),2000)
    },[])
    return (
        <div>
            <Helmet>
                <title>My Achievements</title>
            </Helmet>
            <div className="Projects">
                {
                    achievementData.map((pc)=>{
                        return <AchievementCategories pc={pc}></AchievementCategories>
                    })
                }
            </div>
        </div>
    );
}
 
export default Achievements;