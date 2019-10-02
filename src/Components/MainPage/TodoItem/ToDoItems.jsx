import React from 'react';
import style from './ToDoItem.module.scss';
import { connect } from 'react-redux';
import ToDoItem from './ToDoItem';

const ToDoItems = (props) => {
  
  let containerCssClass = props.status === true ? style.containerDark : style.containerLight;
  return (
    <div className={containerCssClass}>
      {props.todo.map(el => <ToDoItem el={el} />)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.todoReducer.toDo,
    status: state.todoReducer.status
  }
};


export default connect(mapStateToProps)(ToDoItems);
