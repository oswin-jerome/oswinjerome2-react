import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../Heading/Heading';
import './RecentWorks.scss';

const RecentWorks = () => {
    return (
        <div id="recentWorks" className="pc">
            <Heading text="Recent " primary2="Works"></Heading>
            <div className="pc_imgs">
                    <a target="_blank" href="https://oswin-jerome.github.io/resume-generator">
                    <div>
                        <img src={require("./../../../assets/projects//resume-generator.jpg")} alt="" />
                        <p>Resume Generator</p>
                    </div>
                    </a>
                    <a target="_blank" href="http://billocity.ideaux.in/">
                    <div>
                        <img src={require("./../../../assets/projects/billocity.jpg")} alt="" />
                        <p>Billocity</p>
                    </div>
                    </a>
                    <a target="_blank" href="https://github.com/oswin-jerome/basic_invoice_generator">
                    <div>
                        <img src={require("./../../../assets/projects//invoice.png")} alt="" />
                        <p>Invoice generator</p>
                    </div>
                    </a>
            </div>
        <div className="place-center">
        <Link to="/projects"  className="btn grad-btn" >Know More</Link>

        </div>
        </div>
    );
}
 
export default RecentWorks;