import React from 'react';
import style from './NavBar.module.css';
import Home from './Home&Settings&Logo/Home';
import Settings from './Home&Settings&Logo/Settings';
import {NavLink} from 'react-router-dom';
import Logo from './Home&Settings&Logo/Logo';

const NavBar = () => {
    return (
        <div className={style.navBar}>
            <Logo />
            <NavLink activeClassName={style.activeLink} to="/home"><Home /></NavLink>
            <NavLink activeClassName={style.activeLink} to="/settings"><Settings /></NavLink>
        </div>
    );
}

export default NavBar;
