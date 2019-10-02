import React from 'react';
import style from './Settings.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
    
    return (
        <div className={style.container}>
            <div className={style.linkName}   ><FontAwesomeIcon size='1x' icon={faCog} className={style.links}/>Settings</div>
        </div>
    );
}


export default Settings;
