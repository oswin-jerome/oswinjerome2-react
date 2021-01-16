import React from 'react';
import './Loader.scss'
const Loader = () => {

    // },[])
    return (
        <div className="loader loader-hide">
            <div class="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    );
}
 
export default Loader;