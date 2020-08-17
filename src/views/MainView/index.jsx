import React, { useState } from 'react';
import './scss/MainView.scss';

import AnimatedBackground from './AnimatedBackground';
import SearchForm from './SearchForm';

import { Navbar } from '../../components';

const MainView = () => {
    const _innerHeight = window.innerHeight;
    const [coverOpacity, setCoverOpacity] = useState(0);
    return (
        <div
            className={`main-container`}
            onScroll={(elem) => {
                const calculated = elem.target.scrollTop / _innerHeight;
                setCoverOpacity(calculated > 1 ? 1 : calculated);
            }}
        >
            <Navbar />
            <AnimatedBackground coverOpacity={coverOpacity} />
            <SearchForm />
            <div className="contents-container">
                <div className="contents-wrapper">
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                </div>
            </div>
        </div>
    );
};

export default MainView;
