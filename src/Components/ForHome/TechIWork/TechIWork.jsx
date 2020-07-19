import React from 'react';
import './TechIWork.scss'
import Heading from '../../Heading/Heading';
import AutoGrid from '../../AutoGrid/AutoGrid';
import {androidStudio,adobeXD,nodejs,flutter,react,vue, firebase,laravel,angular} from './../../../assets/AssetsHelper'
const TechIWork = () => {
    var tech = [
        {
            icon:androidStudio
        },
        {
            icon:adobeXD
        },
        {
            icon:nodejs
        },
        {
            icon:flutter
        },
        {
            icon:react
        },
        {
            icon:firebase
        },
        {
            icon:vue
        },
        {
            icon:laravel
        },
        {
            icon:angular
        },
    ]
    return (
        <div id="TechIWork" className="padder">
            <Heading primary1="Tech " text="I work with"></Heading>
            <AutoGrid items={tech}></AutoGrid>
        </div>
    );
}
 
export default TechIWork;