import React from 'react';
import PropTypes from 'prop-types';
import CircleFramedImage from '../CircleFramedImage';
import { Link } from 'react-router-dom';

const SideMenu = (props) => {
    return (
        <div className={`navbar-content-container ${props.isOpened ? 'active' : ''}`}>
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
            <div className="menu-container  navbar-content-wrapper">
                <Link className="menu-link-item" to="/">
                    메인화면
                </Link>
                <Link className="menu-link-item" to="/clubs">
                    동아리 목록
                </Link>
                <Link className="menu-link-item" to="/posts">
                    활동 포스팅 목록
                </Link>
            </div>
            <div className="club-list-container  navbar-content-wrapper"></div>
        </div>
    );
};

SideMenu.propTypes = {
    isOpened: PropTypes.bool.isRequired,
};

export default SideMenu;
