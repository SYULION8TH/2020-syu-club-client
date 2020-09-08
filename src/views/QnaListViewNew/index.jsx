import React, { useEffect, useState } from 'react';
import { ClubsAPI, QnaAPI } from '../../api';
import './scss/QnaListViewNew.scss';
import { CircleFramedImage, BackgroundImageView } from '../../components';
import { isNullOrUndefined } from 'util';
import { GoSearch } from 'react-icons/go';
import { BiX } from 'react-icons/bi';
import QnaListItem from './QnaListItem';

const QnaListViewNew = (props) => {
    const [clubInfo, setClubInfo] = useState(null);
    const [QNAs, setQNAs] = useState([]);
    const club = {
        _id: props.match.params.club_id,
        fetch: async () => {
            const response = await ClubsAPI.getClub(club._id);
            setClubInfo(response);
        },
    };
    const qna = {
        fetch: async () => {
            const response = await QnaAPI.getQNAs(club._id);
            setQNAs(response);
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
            onScroll={() => {
                console.log('hello');
            }}
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
                                <input type="text" placeholder="검색어를 입력해주세요" />
                                <button type="button">
                                    <GoSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qna-list-view-content-container">
                    {QNAs.map((item, idx) => {
                        return <QnaListItem data={item} key={idx} />;
                    })}
                </div>
            </>
        </BackgroundImageView>
    );
};

export default QnaListViewNew;
