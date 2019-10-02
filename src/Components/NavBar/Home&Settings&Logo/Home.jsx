import React from 'react';
import style from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.linkName}  ><FontAwesomeIcon size='1x' icon={faHome} className={style.links}/>Home</div>
        </div>
    );
}

export default Home;
