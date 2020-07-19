import React from 'react';
import Heading from '../../Heading/Heading';
import './contactMe.scss'
import {phone, wa, gmail} from './../../../assets/AssetsHelper'
const ContactMe = () => {
    return (
        <div className="padder">
            <Heading text="Contact"></Heading>
            <div className="contact">
                {/* <a href="#">
                <div className="phone shadow rounded-border">
                    <img src={wa} alt=""/><p>8344441492</p>
                </div>
                </a> */}
                <a href="#">
                <div className="phone shadow rounded-border">
                    <img src={phone} alt=""/><p>9489827339</p>
                </div>
                </a>
                <a href="">
                <div className="email shadow rounded-border">
                   <img src={gmail} alt=""/><p>oswinjeromej@gmail.com</p>
                </div>
                </a>
            </div>
        </div>
    );
}
 
export default ContactMe;