import React from 'react';
import Heading from '../../Heading/Heading';
import AutoGrid from '../../AutoGrid/AutoGrid';
import {fb, github, insta, tw,linkedin} from './../../../assets/AssetsHelper'
const FollowMe = () => {
    var soc = [
        {
            icon:fb,
            link:'https://www.facebook.com/oswin.jerome'
        },
        {
            icon:github,
            link:'https://github.com/oswin-jerome'
        },
        {
            icon:insta,
            link:'https://www.instagram.com/oswin_jerome/'
        },
        {
            icon:tw,
            link:'https://twitter.com/oswin_jerome'
        },
        {
            icon:linkedin,
            link:'https://www.linkedin.com/in/oswin-jerome-708587154/'
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