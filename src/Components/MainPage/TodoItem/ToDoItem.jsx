import React, { useState } from 'react';
import style from './ToDoItem.module.scss';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faClock, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { deleteTodoAC, changeTextAC, addCurrentTodoInCompletedAC, changeNameToDoAC } from '../../../redux/todoReducer'

const ToDoItem = (props) => {
  const [mode, editMode] = useState(false);
  const [mode1, editMode1] = useState(false);
  const [toDoTask, statusToDoTask] = useState(true);
  let toDoDescription = (e) => {
    props.changeText(props.el.id, e.currentTarget.value);
  }
  let toDoName = (e) => {
    props.changeNameToDo(props.el.id, e.currentTarget.value);
  }
  let numberPriority = 1;
  let newPriority = 'low';
  let onchangePriority = ()=>{
    numberPriority++;
    if(numberPriority>3){
      numberPriority=1;
    }
    
    if(numberPriority===1){
      newPriority="low"
    }
    else if(numberPriority===2){
      newPriority="Medium"
    }
    else if(numberPriority===3){
      newPriority="High"
    }

  }
  // let containerCssClass = props.status === true ? style.containerDark : style.containerLight;
  debugger
  return <div className={style.todoContainer} key={props.el.id}>
    <div className={style.header}>
      <div className={style.headerChilds}>
        <div className={style.priority} onClick={()=>{onchangePriority()}}>{newPriority} priority</div>
        <FontAwesomeIcon size='1x' icon={faClock} className={style.date} />
        <div>{props.el.date}</div>
      </div>
    </div>
    {mode1 ?
      <input onChange={toDoName} autoFocus={true} onBlur={() => editMode1(false)} value={props.nameToDo} placeholder='...change ToDoName' />
      : <div className={style.nameToDoItem} onClick={() => editMode1(true)}>{props.el.nameToDo}</div>}
    <div className={style.content}>
      {mode ?
        <input onChange={toDoDescription} autoFocus={true} onBlur={() => editMode(false)} value={props.description} placeholder='...change description ' />
        : <div className={style.description} onClick={() => editMode(true)}>{props.el.description}</div>}
      
      
      <div className={style.buttons} onClick={() => { statusToDoTask(false) }}>
        {toDoTask ?
          <FontAwesomeIcon size='1x' icon={faEllipsisV} className={style.deleteButton} />
          : <button className={style.comletedButton} onClick={() => props.addCurrentTodoInCompleted(props.el.id)}>Completed</button>} 
      </div>
      {!toDoTask ? <button className={style.closeButton} onClick={() => { statusToDoTask(true) }} >close</button> : ''}
      
      <div className={style.trash} onClick={() => { props.deleteToDo(props.el.id) }} >
        <FontAwesomeIcon size='1x' icon={faTrash} className={style.deleteButton} />
      </div>
    </div>

  </div>



};

const mapStateToProps = (state) => {
  return {
    description: state.todoReducer.toDo.description,
    status: state.todoReducer.status,
    nameToDo: state.todoReducer.nameToDo
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteToDo: (id) => {
      dispatch(deleteTodoAC(id));
    },
    changeText: (id, text) => {
      dispatch(changeTextAC(id, text));
    },
    changeNameToDo: (id, text) => {
      dispatch(changeNameToDoAC(id, text));
    },
    addCurrentTodoInCompleted: (id) => {
      dispatch(addCurrentTodoInCompletedAC(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
