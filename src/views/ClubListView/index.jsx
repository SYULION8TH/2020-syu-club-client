import React, { useEffect, useState } from 'react';
import { ClubsAPI } from '../../api';
import { Navbar, ClubCard, PostSearch, BackgroundImageView } from '../../components';
import * as LibTools from '../../lib/tools';
import './scss/style.scss';
import { isNullOrUndefined } from 'core-util-is';
import { useHistory } from 'react-router-dom';

const ClubListView = () => {
    const [infos, setInfo] = useState([]);
    const [nextURL, setNextURL] = useState(null);
    const [values, setValues] = useState('');
    const history = useHistory();

    const fetch = async (params, needToAppend = true) => {
        const response = await ClubsAPI.getClubs({
            limit: 10,
            ...params,
        });
        setNextURL(response.next);
        if (needToAppend) {
            setInfo([...infos, ...response.results]);
        } else {
            setInfo(response.results);
        }
    };

    const ui = {
        onScroll: (event) => {
            // 현재 스크롤의 높이 + 현재 스크롤의 위치
            if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
                if (!isNullOrUndefined(nextURL)) {
                    const _queries = LibTools.getQueriesFromURL(nextURL);
                    console.log(_queries);
                    fetch({
                        ..._queries,
                        search: values,
                    });
                }
            }
        },
        onClick: (clubId) => {
            history.push(`/club/${clubId}`);
        },
    };

    useEffect(() => {
        fetch();
    }, []);

    var handleClick = function (info) {
        document.location.href = 'club/' + info.club_id;
    };

    var handleClick = function (info) {
        document.location.href = 'club/' + info.club_id;
    };

    var handleClick = function (info) {
        document.location.href = 'club/' + info.club_id;
    };

    return (
        <BackgroundImageView
            headerHeight={252}
            className="clublist-container"
            header={
                <div className="header-wrapper">
                    <PostSearch values={values}>동아리리스트</PostSearch>
                </div>
            }
            onScroll={ui.onScroll}
        >
            <div className="main-wrapper">
                <div className="main-cards">
                    {infos.length > 0 ? (
                        infos.map((info, idx) => (
                            <ClubCard
                                key={idx}
                                name={info.club_name}
                                imgUrl={info.club_img_url}
                                category={info.club_type_desc}
                                likeCount={info.likes}
                                onClick={() => ui.onClick(info.club_id)}
                            />
                        ))
                    ) : (
                        <div className="main-wrapper-placeholder">
                            <p>등록된 동아리가 없습니다</p>
                        </div>
                    )}
                </div>
            </div>
        </BackgroundImageView>
    );

    // return (
    //     <div className="clublist-container">
    //         <div className="clublist-bg">
    //             <img
    //                 className="clublist-bg-stars"
    //                 src={require('../../assets/img/bg_stars@2x.png')}
    //             ></img>
    //         </div>
    //         <div className="clublist-main">
    //             <header>
    //                 <div className="header-navbar" />
    //                 <div className="header-wrapper">
    //                     <div className="header-content">
    //                         <PostSearch setValues={setValues} values={values}>
    //                             동아리리스트
    //                         </PostSearch>
    //                     </div>
    //                 </div>
    //             </header>
    //             <main>
    //                 <div className="main-wrapper">
    //                     <div className="main-cards">
    //                         {infos.length > 0 ? (
    //                             infos.map((info, idx) => (
    //                                 <ClubCard
    //                                     key={idx}
    //                                     name={info.club_name}
    //                                     imgUrl={info.club_img_url}
    //                                     category={''}
    //                                 />
    //                             ))
    //                         ) : (
    //                             <p>등록된 동아리가 없습니다</p>
    //                         )}
    //                     </div>
    //                 </div>
    //             </main>
    //         </div>
    //     </div>
    // );
};

export default ClubListView;
