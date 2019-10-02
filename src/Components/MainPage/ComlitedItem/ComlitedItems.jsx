import React from 'react';
import style from './ComlitedItem.module.css';
import { connect } from 'react-redux';
import CompletedItem from './ComlitedItem'
import {deleteTodoAC,changeTextAC} from '../../../redux/todoReducer'

const CompletedItems = (props) => {
  let containerCssClass = props.status === true ? style.containerDark : style.containerLight;
  
  return (
    <div className={containerCssClass}>
      {props.complited.map(el =><CompletedItem el={el}/> )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { 
    complited: state.todoReducer.complited,
    status: state.todoReducer.status
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteToDo: (id) => {
        dispatch(deleteTodoAC(id));
      },
      changeText: (text,id) => {
        dispatch(changeTextAC(text,id));
      },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletedItems);
