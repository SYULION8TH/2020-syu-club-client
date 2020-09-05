import React from 'react';
import { CircleFramedImage } from '../../components';
import PropTypes from 'prop-types';
import { isNullOrUndefined } from 'util';
const QnaUserInfo = (props) => {
    return (
        <div
            className={`__qna-detail-view-user-info-container ${
                !isNullOrUndefined(props.className) ? props.className : ''
            }`}
        >
            <CircleFramedImage
                imgUrl={!isNullOrUndefined(props.imgUrl) ? props.imgUrl : ''}
                width={20}
                height={20}
                imgAlt="사용자 프로필 이미지"
            />
            <p className="__qna-detail-view-user-info-name">{props.name}</p>
        </div>
    );
};

QnaUserInfo.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default QnaUserInfo;
