import React,{Component,Fragment} from 'react';
import Slider from 'react-slick';
import Img1 from '../../assets/img/banner-1.png';
import Img2 from '../../assets/img/banner-2.jpg';
import Img3 from '../../assets/img/banner-3.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Image} from 'react-bootstrap';

class TopBanner extends Component{
    constructor()
    {
        super();
        this.state={}
    }
    render()
    {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 10,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
          };
      
        return(
            <Fragment>
                  <div className="slider-section">
                      <div className="slide-item">
                            <img className="" src={Img1}></img>
                            <div className="slide-text">
                                <div className="inner-slide-text ">
                                    <h1>Slider with text</h1>
                                    <p>Slider paragraph with some text</p>
                                    <a href="" class="btn btn-primary">Go here link</a>
                                </div>
                            </div>
                      </div>
                  </div>
            </Fragment>
        );
    }
}

export default TopBanner;