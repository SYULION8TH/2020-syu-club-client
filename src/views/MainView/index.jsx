import React, { useState, useEffect } from 'react';
import './scss/MainView.scss';
import { ClubsAPI } from '../../api';

import AnimatedBackground from './AnimatedBackground';
import SearchForm from './SearchForm';

import { Navbar, Card, PostCard } from '../../components';

const MainView = () => {
    const _innerHeight = window.innerHeight;
    const [coverOpacity, setCoverOpacity] = useState(0);

    useEffect(()=>{ClubsAPI.getClubs()})
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
                    <Card title="관심 동아리 최근 포스트">
                        <PostCard title="테스트" date={'2020-12-10'} />
                    </Card>
                    <Card title="관심 동아리 최근 포스트">
                        <PostCard
                            title="테스트"
                            date={new Date()}
                            imgUrl={
                                'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/105517799_699215570933939_4504126597064258434_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Lo0SPzx3WowAX-fFN1x&oh=7730262a5a596937b2efe53e98219ed5&oe=5F681808'
                            }
                        />
                    </Card>
                    <Card title="아무튼 목록">
                        <PostCard
                            title="테스트"
                            date={new Date()}
                            imgUrl={
                                'https://cf.realclass.co.kr/qualson/images/class_banner_1_wbb2_m.png'
                            }
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MainView;
