import React from 'react';
import './TechIWork.scss'
import Heading from '../../Heading/Heading';
import AutoGrid from '../../AutoGrid/AutoGrid';
import {androidStudio,adobeXD,nodejs,flutter,react,vue} from './../../../assets/AssetsHelper'
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
            icon:vue
        },
    ]
    return (
        <div id="TechIWork">
            <Heading primary1="Tech " text="I work with"></Heading>
            <AutoGrid items={tech}></AutoGrid>
        </div>
    );
}
 
export default TechIWork;