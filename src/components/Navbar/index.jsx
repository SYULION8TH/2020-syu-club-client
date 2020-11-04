import React, { useState, useEffect } from 'react';
import './scss/Navbar.scss';
import AnimatedMenuIcon from './AnimatedMenuIcon';
import { useHistory } from 'react-router-dom';
import SideMenu from './SideMenu';
import Logo, { LOGO_COLOR_PRESETS } from '../Logo';
import { Link } from 'react-router-dom';
import UserIcon from './UserIcon';

export const Navbar = (props) => {
    const history = useHistory();
    const [menuOpened, setMenuOpened] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);

    const NAVBAR_SCROLL_THRESHOLD = 60;

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
            <UserIcon />
            <SideMenu isOpened={menuOpened} />
            <div
                // onClick={() => setMenuOpened(false)}
                className={`navbar-container-cover ${menuOpened ? 'active' : ''}`}
            ></div>
        </div>
    );
};
