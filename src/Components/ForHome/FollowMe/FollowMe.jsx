import React from 'react';
import Heading from '../../Heading/Heading';
import AutoGrid from '../../AutoGrid/AutoGrid';
import {fb, github, insta, tw} from './../../../assets/AssetsHelper'
const FollowMe = () => {
    var soc = [
        {
            icon:fb,
            link:'sds'
        },
        {
            icon:github,
            link:'sds'
        },
        {
            icon:insta,
            link:'sds'
        },
        {
            icon:tw,
            link:'sds'
        },
    ]
    return ( 
        <div className="padder">
            <Heading text='Follow me on'></Heading>
            <AutoGrid items={soc}></AutoGrid>
        </div>
    );
}
 
export default FollowMe;