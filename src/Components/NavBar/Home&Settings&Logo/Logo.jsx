import React from 'react';
import style from './Logo.module.css';


const Logo = () => {
    return (
        <div className={style.logo}>
            <div className={style.outerCircle}>
                <div className={style.innerCircle}></div>
            </div>
            <div className={style.logoName}>ToDo</div>
        </div>
    );
}

export default Logo;
