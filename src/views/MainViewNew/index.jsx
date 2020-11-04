import React, { useEffect, useState } from 'react';

import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import AnimatedBackground from './AnimatedBackground';

import './scss/MainViewCommon.scss';

// 페이지 전환은 터치 시에만 발생하도록 함

const MainView = () => {
    return (
        <div className="main-view-container">
            <AnimatedBackground coverOpacity={0} />
            <FirstSection className="main-child-view" />
            <SecondSection className="main-child-view" />
        </div>
    );
};

export default MainView;
