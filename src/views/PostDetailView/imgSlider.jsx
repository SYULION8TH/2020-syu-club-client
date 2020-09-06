import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scss/imgSlider.scss"
import bgPost from '../../assets/img/post-bg@2x.png';

//이미지 사이즈 조정하기
const ImgSlider = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        touchMove: true
        // autoplay: true,
        // autoplaySpeed: 4000
      };
    return (
        <Slider {...settings}>
        <div>
          <img src={bgPost}/>
        </div>
        <div>
        <img src={bgPost}/>
        </div>
        
      </Slider>
    );
};

export default ImgSlider;