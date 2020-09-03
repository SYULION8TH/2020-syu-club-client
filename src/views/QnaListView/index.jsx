import React, { useEffect, useState } from 'react';
import { QnaAPI } from '../../api';

// import PostSearch from '../../components/PostSearch';

import QnaListItem from './QnaListItem';

const QnaListView = (props) => {
    // 1. 주소에 있는 클럽 아이디를 가져오기
    // 2. 클럽 아이디로 데이터를 가져오기
    // 3. 가져온 데이터를 리액트로 생성하기

    const clubId = props.match.params.club_id;
    // 데이터를 받아와서 저장하는 곳
    const [items, setItems] = useState([]);

    const fetch = async () => {
        const response = await QnaAPI.getQNAs(clubId, {
            limit: 10,
        });
        console.log(response);
        setItems(response.results);
        // items = response.results
        // 위 같은 방법이 안되여 리액트에서,
        // 가져온 데이터가, html하고 연관이 되어있다면, 무조건 state를 써야함.
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="qna-list-container">
            <div className="qna-list-contents">
                {items.map((item, idx) => {
                    return <QnaListItem key={idx} data={item} />;
                })}
            </div>
        </div>
    );
};

export default QnaListView;
