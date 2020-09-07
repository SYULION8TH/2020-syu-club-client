import React, { useEffect, useState } from 'react';
import { ClubsAPI } from '../../api';
import { Navbar, ClubCard, PostSearch } from '../../components';

import './scss/style.scss';

const ClubListView = () => {
    const [infos, setInfo] = useState([]);
    const [values, setValues] = useState('');

    useEffect(() => {
        const getInfo = async () => {
            const result = await ClubsAPI.getClubs({
                limit: 10,
            });
            setInfo([...result.results]);
        };
        getInfo();
    }, []);

    useEffect(() => {
        console.log(infos);
    }, [infos]);

    var handleClick = function (info) {
        document.location.href = "club/"+info.club_id
    };

    return (
        <div className="clublist-container">
            <div className="clublist-bg">
                <img
                    className="clublist-bg-stars"
                    src={require('../../assets/img/bg_stars@2x.png')}
                ></img>
            </div>
            <div className="clublist-main">
                <Navbar />
                <header>
                    <div className="header-navbar" />
                    <div className="header-wrapper">
                        <div className="header-content">
                            <PostSearch setValues={setValues} values={values}>
                                동아리리스트
                            </PostSearch>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="main-wrapper">
                        <div className="main-cards">
                            {infos.map((info, idx) => (
                                <ClubCard
                                    key={idx}
                                    name={info.club_name}
                                    imgUrl={info.club_img_url}
                                    category={''}
                                    onClick={handleClick.bind(this, info)}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ClubListView;
