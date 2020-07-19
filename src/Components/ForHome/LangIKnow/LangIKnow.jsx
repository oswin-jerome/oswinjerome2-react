import React from 'react';
import Heading from '../../Heading/Heading';
import AutoGrid from '../../AutoGrid/AutoGrid';
import {c,cpp,dart,java,js,php,py,ts,cs} from './../../../assets/AssetsHelper'
import './langIKnow.scss'
const LangIKnow = () => {
    var tech = [
        {
            icon:c
        },
        {
            icon:cpp
        },
        {
            icon:dart
        },
        {
            icon:java
        },
        {
            icon:js
        },
        {
            icon:php
        },
        {
            icon:py
        },
        {
            icon:ts
        },
        {
            icon:cs
        },
    ]
    return (
        <div id='LangIKnow' className="padder">
            <Heading primary1="Languages " text="I know"></Heading>
            <AutoGrid items={tech}></AutoGrid>
        </div>
    );
}
 
export default LangIKnow;