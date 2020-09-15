import React, { useEffect, useState } from 'react';
import { ClubsAPI, QnaAPI } from '../../api';
import './scss/QnaListViewNew.scss';
import { CircleFramedImage, BackgroundImageView } from '../../components';
import { isNullOrUndefined } from 'core-util-is';
import { GoSearch } from 'react-icons/go';
import { BiX } from 'react-icons/bi';
import QnaListItem from './QnaListItem';
import * as LibTools from '../../lib/tools';

const QnaListViewNew = (props) => {
    const [clubInfo, setClubInfo] = useState(null);
    const [QNAs, setQNAs] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [isSearched, setIsSearched] = useState(false);
    const [nextURL, setNextURL] = useState(null);
    const club = {
        _id: props.match.params.club_id,
        fetch: async () => {
            const response = await ClubsAPI.getClub(club._id);
            setClubInfo(response);
        },
    };
    const qna = {
        fetch: async (params, needToAppend = false) => {
            let options = {
                limit: 10,
            };
            const response = await QnaAPI.getQNAs(club._id, {
                ...options,
                ...params,
            });
            setNextURL(response.next);
            if (needToAppend) {
                setQNAs([...QNAs, ...response.results]);
            } else {
                setQNAs(response.results);
            }
        },
        ui: {
            search: () => {
                if (isSearched) {
                    // 검색상태인 경우
                    setKeyword('');
                    setIsSearched(false);
                    qna.fetch({
                        question_title__contains: '',
                    });
                } else {
                    // 검색 상태가 아닌 경우
                    if (keyword.trim() !== '') {
                        setIsSearched(true);
                        qna.fetch({
                            question_title__contains: keyword,
                        });
                    } else {
                        alert('검색어를 입력해주세요');
                    }
                }
            },
            onScroll: (event) => {
                if (
                    event.target.offsetHeight + event.target.scrollTop >=
                    event.target.scrollHeight
                ) {
                    if (!isNullOrUndefined(nextURL)) {
                        const _queries = LibTools.getQueriesFromURL(nextURL);
                        qna.fetch(
                            {
                                ..._queries,
                                question_title__contains: keyword,
                            },
                            true,
                        );
                    }
                }
            },
        },
    };

    useEffect(() => {
        club.fetch().then(qna.fetch);
    }, [props.match]);

    return (
        <BackgroundImageView
            className="__qna-list-view-container"
            headerHeight={112}
            bodyClassName="__qna-list-view-content"
            onScroll={qna.ui.onScroll}
        >
            <>
                <div className="qna-list-search-form-container">
                    <div className="qna-list-search-form-wrapper">
                        <CircleFramedImage
                            className="qna-list-search-form-icon"
                            imgUrl={!isNullOrUndefined(clubInfo) ? clubInfo.club_logo_url : ''}
                            imgAlt={'동아리 아이콘'}
                            width={40}
                            height={40}
                        />
                        <div className="qna-list-form-items">
                            <p className="qna-list-form-title">
                                {`${!isNullOrUndefined(clubInfo) ? clubInfo.club_name : ''} Q&A`}
                            </p>
                            <div className="qna-list-search-form">
                                <input
                                    type="text"
                                    placeholder="검색어를 입력해주세요"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                                <button type="button" onClick={qna.ui.search}>
                                    {isSearched ? <BiX /> : <GoSearch />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qna-list-view-content-container">
                    {QNAs.length >= 0 ? (
                        QNAs.map((item, idx) => {
                            return <QnaListItem data={item} key={idx} />;
                        })
                    ) : (
                        <p className="qna-list-view-content-placeholder">등록된 질문이 없습니다</p>
                    )}
                </div>
            </>
        </BackgroundImageView>
    );
};

export default QnaListViewNew;
