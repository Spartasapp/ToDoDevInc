import React from 'react';
import style from './MainPage.module.css';
import { connect } from 'react-redux';
import ToDoItems from './TodoItem/ToDoItems';
import CompletedItem from './ComlitedItem/ComlitedItems';

const MainPage = (props) => {
  let containerCssClass = props.status === true ? style.mainPageDark : style.mainPageLight;
  return (
    <div className={containerCssClass}>
      {props.status === true ?
        <div className={style.toDoDark}>ToDo({props.toDoCount})</div>
        : <div className={style.toDoLight}>ToDo({props.toDoCount})</div>}
        <ToDoItems />
        {props.status === true ?
        <div className={style.toDoDark}>Completed({props.completedCount})</div>
        : <div className={style.toDoLight}>Completed({props.completedCount})</div>}
        <CompletedItem />
      {props.backGroundApp}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.todoReducer.status,
    toDoCount: state.todoReducer.toDoCount,
    completedCount: state.todoReducer.complitedCount,
    backGroundApp: state.todoReducer.backGroundApp
  }
};


export default connect(mapStateToProps)(MainPage);
