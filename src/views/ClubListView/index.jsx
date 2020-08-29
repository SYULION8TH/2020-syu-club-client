import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { ClubsAPI } from '../../api';
import { PostCard } from '../../components';

import './scss/style.scss';

import { BsBarChartFill, BsBatteryFull, BsWifi, BsFilterLeft } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

const ClubListView = () => {
    const fetchClubList = {
        data: [],
        fetch: async () => {
            const result = [
                {
                    id: '1',
                    title: 'yongki',
                },
                {
                    id: '2',
                    title: 'BraveKim',
                },
                {
                    id: '3',
                    title: 'Hello',
                },
            ];
            // const result = await ClubsAPI.getClubApi();
            fetchClubList.data = result;

            return fetchClubList.data;
        },
    };

    const [infos, setInfo] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            const resp = await fetchClubList.fetch();
            console.log(resp);
            setInfo(resp);
        };
        getInfo();
    }, []);

    if (!infos) {
        console.log('users is null');
        return null;
    }

    return (
        <div className="container">
            <header>
                <div className="header-navbar">
                    <div className="header-navbar-time">{moment(new Date()).format('h.mm')}</div>
                    <div className="header-navbar-state">
                        <span>
                            <BsBarChartFill />
                        </span>
                        <span>
                            <BsWifi />
                        </span>
                        <span>
                            <BsBatteryFull />
                        </span>
                    </div>
                </div>
                <span className="header-modal">
                    <BsFilterLeft />
                </span>
                <div className="header-content">
                    <h1 className="header-title">삼육단지</h1>
                    <div className="header-search">
                        <input type="text" />
                        <button type="button">
                            <AiOutlineSearch />
                        </button>
                    </div>
                </div>
            </header>
            <main>
                <div className="main-wrapper">
                    <div className="main-cards">
                        {infos.map((info) => (
                            <PostCard title={info.title} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ClubListView;
