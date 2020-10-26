import React, { useEffect, useState } from 'react';
import { ClubsAPI } from '../../api';
import { BackgroundImageView, PostSearch, ClubCard } from '../../components';
import './scss/index.scss';
import { isNullOrUndefined } from 'core-util-is';
import { useHistory } from 'react-router-dom';
import { getQueriesFromURL } from '../../lib/tools';

const ClubListViewNew = (props) => {
    let requested = false;
    const history = useHistory();
    const queries = getQueriesFromURL(props?.location?.search);
    const [keyword, setKeyword] = useState('');
    const [isSearched, setIsSearched] = useState(false);
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

    useEffect(() => {
        // 주소에 keyword를 붙일 경우 자동 검색 추가
        if (queries && queries.keyword) {
            setKeyword(queries.keyword);
            setIsSearched(true);
            fn.fetch({ search: queries.keyword });
        } else {
            fn.fetch();
        }
    }, []);

    const fn = {
        fetch: async (params, needToAppend = false) => {
            if (!requested) {
                requested = true;
                const response = await ClubsAPI.getClubs({
                    limit: 10,
                    ...params,
                });
                requested = false;
                setNextURL(response.next);
                if (needToAppend) {
                    setClubs([...clubs, response.results]);
                } else {
                    setClubs(response.results);
                }
            }
        },
        clear: () => {},
        search: async () => {
            if (!isSearched) {
                if (keyword.trim() !== '') {
                    setIsSearched(true);
                    await fn.fetch({
                        search: keyword,
                    });
                } else {
                    alert('검색어를 입력해주세요');
                }
            } else {
                setIsSearched(false);
                setKeyword('');
                await fn.fetch();
            }
        },
    };

    return (
        <BackgroundImageView
            className="__club-list-view-container"
            headerHeight={252}
            header={
                <div className="club-list-view-header-container ">
                    <div className="club-list-view-header-wrapper">
                        <PostSearch
                            keyword={keyword}
                            setKeyword={setKeyword}
                            isSearched={isSearched}
                            search={fn.search}
                        >
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
                        fetch({
                            ..._queries,
                            search: keyword,
                        });
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
