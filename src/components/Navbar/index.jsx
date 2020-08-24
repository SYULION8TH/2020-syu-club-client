import React, { useState } from 'react';
import './Navbar.scss';
import AnimatedMenuIcon from './AnimatedMenuIcon';

import CircleFramedImage from '../CircleFramedImage';

export const Navbar = (props) => {
    const [menuOpened, setMenuOpened] = useState(true);
    return (
        <div className={`navbar-container`}>
            <AnimatedMenuIcon isOpened={menuOpened} setIsOpened={(v) => setMenuOpened(v)} />
            <div className={`navbar-content-container ${menuOpened ? 'active' : ''}`}>
                <div className="user-info-container navbar-content-wrapper">
                    <CircleFramedImage
                        imgUrl="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/105517799_699215570933939_4504126597064258434_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Lo0SPzx3WowAX-fFN1x&oh=7730262a5a596937b2efe53e98219ed5&oe=5F681808"
                        imgAlt="테스트 이미지"
                        width={50}
                        height={50}
                    />
                    <div className="user-info-text">
                        <p className="user-info-name">유경수</p>
                        <p className="user-info-email">dev.yoogomja@gmail.com</p>
                    </div>
                </div>
                <div className="menu-container  navbar-content-wrapper"></div>
                <div className="club-list-container  navbar-content-wrapper"></div>
            </div>
        </div>
    );
};
