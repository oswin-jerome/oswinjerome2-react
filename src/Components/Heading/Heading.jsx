

import './Heading.scss'
import React, { Component, useEffect } from 'react';

const Heading = (props) => {
    return (
    <h1 className="Heading"><span>{props.primary1}</span>{props.text} <span>{props.primary2}</span></h1>
    );
}



 
export default Heading;