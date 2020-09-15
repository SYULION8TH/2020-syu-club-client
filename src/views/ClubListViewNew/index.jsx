import React, { useEffect, useState } from 'react';
import { ClubsAPI } from '../../api';
import { BackgroundImageView, PostSearch, ClubCard } from '../../components';
import './scss/index.scss';
import { isNullOrUndefined } from 'core-util-is';
import { useHistory } from 'react-router';
import { getQueriesFromURL } from '../../lib/tools';

const ClubListViewNew = () => {
    let requested = false;
    const history = useHistory();
    const [keyword, setKeyword] = useState(null);
    const [nextURL, setNextURL] = useState(null);
    const [clubs, setClubs] = useState([]);
    const fetch = async (params) => {
        if (!requested) {
            requested = true;
            const response = await ClubsAPI.getClubs({
                limit: 10,
                ...params,
            });
            requested = false;
            setNextURL(response.next);
            setClubs([...clubs, ...response.results]);
        }
    };

    const clear = () => {
        setNextURL(null);
        setClubs([]);
    };

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        if (isNullOrUndefined(keyword)) {
            console.log('keyword is empty');
        } else {
            // 빈 문자열
            if (keyword === '') {
                console.log('empty string', keyword);
            } else if (typeof keyword.map === 'function') {
                console.log('keyword is array', keyword);
            } else {
                console.log('what is this?', keyword);
            }
        }
    }, [keyword]);
    return (
        <BackgroundImageView
            className="__club-list-view-container"
            headerHeight={252}
            header={
                <div className="club-list-view-header-container ">
                    <div className="club-list-view-header-wrapper">
                        <PostSearch values={keyword} setValues={setKeyword}>
                            <span className="club-list-view-header-title">동아리 목록</span>
                        </PostSearch>
                    </div>
                </div>
            }
            onScroll={(event) => {
                if (
                    event.target.offsetHeight + event.target.scrollTop >=
                    event.target.scrollHeight
                ) {
                    if (!isNullOrUndefined(nextURL)) {
                        const _queries = getQueriesFromURL(nextURL);
                        fetch(_queries);
                    }
                }
            }}
        >
            <div className="club-list-view-wrapper">
                {clubs.length <= 0 ? (
                    <div className="club-list-view-wrapper-placholder">
                        <p className="club-list-view-wrapper-placholder-text">
                            등록된 동아리가 없습니다
                        </p>
                    </div>
                ) : (
                    clubs.map((item, idx) => {
                        return (
                            <ClubCard
                                key={idx}
                                name={item.club_name}
                                category={item.club_type_desc}
                                imgUrl={item.club_logo_url}
                                likeCount={item.likes}
                                onClick={() => {
                                    history.push(`/club/${item.club_id}`);
                                }}
                            />
                        );
                    })
                )}
            </div>
        </BackgroundImageView>
    );
};

export default ClubListViewNew;
