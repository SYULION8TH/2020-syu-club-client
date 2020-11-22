import React, { useState, useEffect } from 'react';
import './scss/Navbar.scss';
import AnimatedMenuIcon from './AnimatedMenuIcon';
import { useHistory } from 'react-router-dom';
import SideMenu from './SideMenu';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../../modules/User';
import { isNullOrUndefined } from 'core-util-is';
import Logo, { LOGO_COLOR_PRESETS } from '../Logo';
import { Link } from 'react-router-dom';
import UserIcon from './UserIcon';

export const Navbar = (props) => {
    const history = useHistory();
    const [menuOpened, setMenuOpened] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);

    const NAVBAR_SCROLL_THRESHOLD = 60;
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
    const onScroll = (evt) => {
        if (evt.target.scrollTop > NAVBAR_SCROLL_THRESHOLD) {
            setIsTransparent(false);
        } else {
            setIsTransparent(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll, true);
        history.listen(() => {
            setMenuOpened(false);
        });
    }, []);

    return (
        <div className={`navbar-container ${isTransparent ? '' : 'filled'} `}>
            <AnimatedMenuIcon isOpened={menuOpened} setIsOpened={(v) => setMenuOpened(v)} />
            <Link to="/">
                <Logo color={LOGO_COLOR_PRESETS.YELLOW} weight={5} />
            </Link>
            <UserIcon imgUrl={
                        isNullOrUndefined(info.data) || isNullOrUndefined(info.data.user_profile)
                            ? ''
                            : info.data.user_profile.profile
                    }/>
            <SideMenu isOpened={menuOpened} />
            <div
                // onClick={() => setMenuOpened(false)}
                className={`navbar-container-cover ${menuOpened ? 'active' : ''}`}
            ></div>
        </div>
    );
};
