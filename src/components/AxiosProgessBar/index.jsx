/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ResetAxiosPendingWorks } from '../../modules/AxiosPendingWorks';

const AxiosProgressBar = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentPercentage, setCurrentPercentage] = useState(0);
    const { pendingWorks } = useSelector((state) => state);

    useEffect(() => {
        // 할일이 완전히 종료된 경우 초기화
        if (pendingWorks.pending.length <= 0 && pendingWorks.totalRequested !== 0) {
            setCurrentPercentage(100);
            setTimeout(() => {
                props.store.dispatch(ResetAxiosPendingWorks());
            }, 500);
        } else {
            setCurrentPercentage(
                ((pendingWorks.totalRequested - pendingWorks.pending.length) /
                    pendingWorks.totalRequested) *
                    100,
            );
        }

        if (pendingWorks.totalRequested !== 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [pendingWorks]);

    return (
        <div className={`__axios-request-progress-bar ${isVisible ? '' : 'hide'}`}>
            <div
                className="__axios-request-progress-bar-item"
                style={{ width: `${currentPercentage}%` }}
            ></div>
        </div>
    );
};

AxiosProgressBar.propTypes = {
    store: PropTypes.object.isRequired,
};

export default AxiosProgressBar;
