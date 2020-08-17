import React, { useEffect, useState } from 'react';
import './scss/AnimatedBackground.scss';

import imgBuilding from '../../assets/img/bg_building@2x.png';
import imgStars from '../../assets/img/bg_stars@2x.png';
import imgMoon from '../../assets/img/bg_moon@2x.png';

const AnimatedBackground = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
    }, []);
    return (
        <div className={`background-container ${isLoaded ? 'loaded' : ''}`}>
            <img id="bgBuilding" src={imgBuilding} alt="빌딩 이미지" />
            <img id="bgStars" src={imgStars} alt="별 이미지" />
            <img id="bgMoon" src={imgMoon} alt="달 이미지" />
            <div
                id="blur-cover"
                style={{
                    opacity: props.coverOpacity,
                }}
            ></div>
        </div>
    );
};

export default AnimatedBackground;
