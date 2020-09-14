/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './scss/MainView.scss';
import { ClubsAPI } from '../../api';

import AnimatedBackground from './AnimatedBackground';
import SearchForm from './SearchForm';

import { Card, PostCard, ClubCard } from '../../components';

import { isNullOrUndefined } from 'util';
import InterestClubPosts from './InterestClubPosts';

const MainView = () => {
    const _innerHeight = window.innerHeight;
    const [coverOpacity, setCoverOpacity] = useState(0);

    const [famousClubs, setFamousClubs] = useState(null);

    const fn = {
        famous: {
            fetch: async () => {
                const response = await ClubsAPI.getFamousClubs({
                    limit: 10,
                });
                setFamousClubs(response);
            },
        },
    };

    useEffect(() => {
        fn.famous.fetch();
    }, []);

    return (
        <div
            className={`main-container`}
            onScroll={(elem) => {
                if (elem.target.className === 'main-container') {
                    const calculated = elem.target.scrollTop / _innerHeight;
                    setCoverOpacity(calculated > 1 ? 1 : calculated);
                }
            }}
        >
            <AnimatedBackground coverOpacity={coverOpacity} />
            <SearchForm />
            <div className="contents-container">
                <div className="contents-wrapper">
                    <InterestClubPosts />
                    <Card
                        title="관심 동아리 최근 포스트"
                        wrapperClassName="famous-clubs-list-container"
                    >
                        {!isNullOrUndefined(famousClubs) ? (
                            famousClubs.results.map((item, idx) => (
                                <ClubCard
                                    key={idx}
                                    name={item.club_name}
                                    category={'카테고리'}
                                    imgUrl={item.club_logo_url}
                                    likeCount={item.like_count}
                                />
                            ))
                        ) : (
                            <></>
                        )}
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
