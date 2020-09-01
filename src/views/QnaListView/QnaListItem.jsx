import React from 'react';
import PropTypes from 'prop-types';

const QnaListItem = (props) => {
    return (
        <div className="qna-list-content-item">
            <p className="qna-list-item-title">{props.data.question_title}</p>
        </div>
    );
};

QnaListItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default QnaListItem;
