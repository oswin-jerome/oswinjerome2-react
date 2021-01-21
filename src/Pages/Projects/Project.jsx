import React, { useEffect } from 'react';
import projectsData from './../../assets/ProjectHelper';
import ProjectCategory from '../../Components/ForProjects/ProjectCategory/ProjectCategory';
import gsap from 'gsap/gsap-core';
import {Helmet} from 'react-helmet'

const Projects = () => {

    useEffect(()=>{
        var timeline = new gsap.timeline();
        timeline.from('.Projects',0.5,{opacity:0,x:20},'+=0.3')
        timeline.from('.pc_imgs div',0.5,{opacity:0,scale:0.9,stagger:0.3})
    },[])
    return (
        <div>
            <Helmet>
                <title>My Projects</title>
            </Helmet>
            <div className="Projects">
                {
                    projectsData.map((pc)=>{
                        return <ProjectCategory pc={pc}></ProjectCategory>
                    })
                }
            </div>
        </div>
    );
}
 
export default Projects;