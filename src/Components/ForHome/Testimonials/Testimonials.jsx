import React from 'react';
import Heading from '../../Heading/Heading';
import './Testi.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Testimonials = () => {


    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", color:"black" }}
            onClick={onClick}
          >
              <h1>H</h1>
          </div>
        );
      }


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows:false,
        // centered:true,
        autoplay:true,
        autoplaySpeed:3000,
        // nextArrow: <SamplePrevArrow />,
        // prevArrow: <SamplePrevArrow />,

        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: true
                }
              },
              {
                breakpoint: 9000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: true
                }
              },
        ]
      };
    return ( 
        <div className="padder" id="Testi">
            <Heading text="Feedbacks / Testimonies"></Heading>
            {/* <Slider {...settings} style={{width:"99vw",margin:"auto"}} >
                <div className="car-list">
                    <div className="car-card">
                        <img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" alt="" className="car-dp"/>
                        <p className="car-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nulla?</p>
                        <p className="car-name">Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="car-list">
                    <div className="car-card">
                        <img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" alt="" className="car-dp"/>
                        <p className="car-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nulla?</p>
                        <p className="car-name">Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="car-list">
                    <div className="car-card">
                        <img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" alt="" className="car-dp"/>
                        <p className="car-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nulla?</p>
                        <p className="car-name">Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="car-list">
                    <div className="car-card">
                        <img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" alt="" className="car-dp"/>
                        <p className="car-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nulla?</p>
                        <p className="car-name">Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="car-list">
                    <div className="car-card">
                        <img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" alt="" className="car-dp"/>
                        <p className="car-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nulla?</p>
                        <p className="car-name">Lorem, ipsum.</p>
                    </div>
                </div>
                
                
                
            </Slider> */}
            <a href="https://forms.gle/VM1vVDkkgsok8Z697" target="_blank" className="btn grad-btn">Give your feedback</a>
        </div>
     );
}
 
export default Testimonials;