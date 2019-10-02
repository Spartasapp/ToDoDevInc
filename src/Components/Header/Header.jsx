import React from 'react';
import style from './Header.module.scss';
import { connect } from 'react-redux';
import {addNewToDoThunkAC} from '../../redux/todoReducer'
const Header =(props) => {
  let containerCssClass = props.status === true ? style.headerDark : style.headerLight;
  return (
    <div className={containerCssClass}>
        <div onClick={()=>props.addNewToDo()} className={style.addToDoButton}>New ToDo</div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return { 
    status: state.todoReducer.status
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewToDo: () => {
        dispatch(addNewToDoThunkAC());
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

