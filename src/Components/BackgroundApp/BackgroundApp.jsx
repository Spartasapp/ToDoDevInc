import React, { useState } from 'react';
import style from './BackgroundApp.module.scss';
import { connect } from 'react-redux';
import Switch from "@material-ui/core/Switch";
import {changeBackgroundAppAC} from '../../redux/todoReducer'


const BackgroundApp = (props) => {
    const [state, setState] = useState(false);

    // const changeBackgroundApp = name => event => {
    //     setState({ ...state, [name]: event.target.checked });
    //     // props.changeBackgroundApp(name);
    // };
    const changeBackgroundApp = () => {
        setState(!state);
        props.changeBackgroundApp(state);
    };
    let containerCssClass = props.status === true ? style.backgroundAppDark : style.backgroundAppLight;
    return (
        <div className={containerCssClass}>
           <div className={style.elements}>Change Background App - <Switch onChange={changeBackgroundApp} checked={props.status} value={state.checked} color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} /></div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
      status: state.todoReducer.status
      
    }
  };
const mapDispatchToProps = (dispatch) => {
    return {
        changeBackgroundApp: (status) => {
          dispatch(changeBackgroundAppAC(status));
        }
      }
  
};


export default connect(mapStateToProps,mapDispatchToProps)(BackgroundApp);
