import React from 'react';
import Hero from '../../Components/Hero/Hero';
import MyStory from '../../Components/MyStory/MyStory';
import './HomePage.scss'
import TechIWork from '../../Components/ForHome/TechIWork/TechIWork';
const HomePage = () => {
    return (
        <div id="homePage">
            <div className="c"><Hero></Hero></div>
            <div className="c"><MyStory></MyStory></div>
            <div className="c"><TechIWork></TechIWork></div>
        </div>
    );
}
 
export default HomePage;