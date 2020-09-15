/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './scss/MainView.scss';
import { ClubsAPI } from '../../api';

import AnimatedBackground from './AnimatedBackground';
import SearchForm from './SearchForm';

import { Card, PostCard, ClubCard } from '../../components';

import { isNullOrUndefined } from 'core-util-is';
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
                        title="지금 인기 있는 동아리"
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
                </div>
            </div>
        </div>
    );
};

export default MainView;
