import React from 'react';
import { Link } from 'react-router-dom';
import { GoPerson } from 'react-icons/go';
import './scss/UserIcon.scss';
import { useSelector } from 'react-redux';

const UserIconPlaceholder = () => {
    return (
        <div className="__user-icon-placeholder-container">
            <div className="__user-icon-placholder-cover"></div>
            <GoPerson className="__user-icon-svg" />
        </div>
    );
};

const UserIcon = ({ size = 25, className = '', imgUrl = '' }) => {
    const { info } = useSelector((state) => state.user);
    const IconLink = info.data !== null && info.data !== undefined ? '/login' : '/modity';

    return (
        <Link
            to={IconLink}
            style={{
                zIndex: -1,
            }}
        >
            <div
                className={`__user-icon-container ${className}`}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                }}
            >
                {imgUrl !== '' && imgUrl !== undefined && imgUrl !== null ? (
                    <img className="__user-icon-img" src={imgUrl} alt="유저 이미지" />
                ) : (
                    <UserIconPlaceholder />
                )}
            </div>
        </Link>
    );
};

export default UserIcon;
