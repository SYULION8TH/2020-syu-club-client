import React from 'react';
import bg from "../../assets/img/bg-building2.png"
import imgStars from '../../assets/img/stars@2x.png';
import imgMoon from '../../assets/img/bg_moon@2x.png';
import logo from '../../assets/img/logo@2x.png';
import googleIcon from '../../assets/img/google_icon@2x.png';
import kakaoIcon from '../../assets/img/kakao_icon@2x.png';
import "./Login.scss"
import SocialConnectLink from "../../components/Navbar/SocialConnectLink"

const loginView = () => {
    return <>
        <div className="__bg-container">
            <img id="bgBuilding"src={bg} alt="background_img"/>
            <img id="bgStars" src={imgStars} alt="bg-stars" />
            <img id="bgMoon" src={imgMoon} alt="달 이미지" />
            <img id="logo" src={logo} alt="로고 사진" />
            <div id="logo-position">
                <div id="logo-container">
                    <div className="text">소셜 로그인</div>
                    <div>
                        <SocialConnectLink to="/accounts/kakao/login">
                            <img src={kakaoIcon} alt="카카오 로고 이미지" />
                        </SocialConnectLink>
                        <SocialConnectLink to="/accounts/google/login">
                            <img src={googleIcon} alt="구글 로고 이미지" />
                        </SocialConnectLink>
                    </div>
                    <div className="text">로그인 해주세요.</div>
                </div>
            </div>
        </div>
    </>
};

export default loginView;
