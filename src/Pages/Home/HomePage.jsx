import React, { useEffect } from 'react';
import Hero from '../../Components/Hero/Hero';
import MyStory from '../../Components/MyStory/MyStory';
import './HomePage.scss'
import TechIWork from '../../Components/ForHome/TechIWork/TechIWork';
import LangIKnow from '../../Components/ForHome/LangIKnow/LangIKnow';
import FollowMe from '../../Components/ForHome/FollowMe/FollowMe';
import ContactMe from '../../Components/ForHome/ContactMe/ContactMe';
const HomePage = () => {

    return (
        <div id="homePage">
            <div className="c"><Hero></Hero></div>
            {/* <div className="c"><MyStory></MyStory></div> */}
            <div className="c"><TechIWork></TechIWork></div>
            <div className="c"><LangIKnow></LangIKnow></div>
            <div className="c"><FollowMe></FollowMe></div>
            <div className="c"><ContactMe></ContactMe></div>
        </div>
    );
}
 
export default HomePage;