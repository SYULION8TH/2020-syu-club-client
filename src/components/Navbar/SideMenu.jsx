/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import CircleFramedImage from '../CircleFramedImage';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfo } from '../../modules/User';
import { isNullOrUndefined } from 'util';
import SocialConnectLink from './SocialConnectLink';

const InterestClubsList = (props) => {
    if (
        isNullOrUndefined(props.data) ||
        isNullOrUndefined(props.data.user) ||
        props.data.user.interest_club.length <= 0
    ) {
        return <></>;
    } else {
        return (
            <div className="club-list-container  navbar-content-wrapper">
                <div className="club-list-wrapper">
                    <p className="club-list-title">관심 동아리</p>
                    <ul className="club-list">
                        {props.data.user.interest_club.map((item, idx) => {
                            return (
                                <li key={item.interest_club_id} className="club-list-item">
                                    <Link
                                        className="club-list-item-link"
                                        to={`/club/${item.club.club_id}`}
                                    >
                                        {item.club.club_name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
};

const SideMenu = (props) => {
    const { info } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const fn = {
        user: {
            fetch: () => {
                dispatch(getUserInfo());
            },
        },
    };

    useEffect(() => {
        if (isNullOrUndefined(info.data)) {
            fn.user.fetch();
        }
    }, []);

    useEffect(() => {
        if (!isNullOrUndefined(info.error)) {
            // if (info.error.response.status === 401 || info.error.response.status === 403) {
            // 로그인이 안된 경우
            // } else {
            // 실제 통신에 에러가 발생한 경우
            // }
        } else if (!isNullOrUndefined(info.data)) {
            // console.log(info.data);
        } else {
            // console.log('requested..');
        }
        return () => {};
    }, [info.loading]);

    return (
        <div className={`navbar-content-container ${props.isOpened ? 'active' : ''}`}>
            <div className="user-info-container navbar-content-wrapper">
                <CircleFramedImage
                    imgUrl={
                        isNullOrUndefined(info.data) || isNullOrUndefined(info.data.user_profile)
                            ? ''
                            : info.data.user_profile.profile
                    }
                    imgAlt={
                        isNullOrUndefined(info.data)
                            ? '미 로그인 유저 이미지'
                            : `${info.data.user.username} 프로필 이미지`
                    }
                    width={50}
                    height={50}
                />
                <div className="user-info-text">
                    {!isNullOrUndefined(info.data) ? (
                        <>
                            <p className="user-info-name">{info.data.user.username}</p>
                            <p className="user-info-email">{info.data.user.email}</p>
                        </>
                    ) : (
                        <p className="user-info-name">로그인이 필요합니다</p>
                    )}
                </div>
            </div>
            <div className="menu-container  navbar-content-wrapper">
                <Link className="menu-link-item" to="/">
                    메인화면
                </Link>
                <Link className="menu-link-item" to="/club">
                    동아리 목록
                </Link>
                <Link className="menu-link-item" to="/post">
                    활동 포스팅 목록
                </Link>
                <SocialConnectLink to="/accounts/kakao/login">
                    카카오 로그인
                </SocialConnectLink>
                <SocialConnectLink to="/accounts/google/login">
                    구글 로그인
                </SocialConnectLink>
                
            </div>
            <InterestClubsList data={info.data} />
        </div>
    );
};
SideMenu.propTypes = {
    isOpened: PropTypes.bool.isRequired,
};

export default SideMenu;
