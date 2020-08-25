import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import AnimatedMenuIcon from './AnimatedMenuIcon';

import CircleFramedImage from '../CircleFramedImage';
import SideMenu from './SideMenu';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../../modules/User';
import { isNullOrUndefined } from 'util';

export const Navbar = (props) => {
    const { info } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const fn = {
        user: {
            fetch: () => {
                dispatch(getUserInfo());
            },
        },
    };

    useEffect(() => {
        if (isNullOrUndefined(info.data)) {
            fn.user.fetch();
        }
    }, []);

    const [menuOpened, setMenuOpened] = useState(true);
    return (
        <div className={`navbar-container`}>
            <AnimatedMenuIcon isOpened={menuOpened} setIsOpened={(v) => setMenuOpened(v)} />
            <SideMenu isOpened={menuOpened} info={info} />
        </div>
    );
};
