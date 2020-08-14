import React from 'react';
import './scss/MainView.scss';

import AnimatedBackground from './AnimatedBackground';
import SearchForm from './SearchForm';

const MainView = () => {
    return (
        <div className={`main-container`}>
            <AnimatedBackground />
            <SearchForm />
        </div>
    );
};

export default MainView;
