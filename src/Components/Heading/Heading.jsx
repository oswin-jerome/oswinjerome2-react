

import './Heading.scss'
import React, { Component, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap/gsap-core';

const Heading = (props) => {
   
    return (
    <h1 className="Heading"><span>{props.primary1}</span>{props.text} <span>{props.primary2}</span></h1>
    );
}



 
export default Heading;