import React from 'react';
import style from '../TodoItem/ToDoItem.module.scss';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { deleteCompletedTodoAC} from '../../../redux/todoReducer'

const CompletedItem = (props) => {
  return <div className={style.todoContainer} key={props.el.id}>
    <div className={style.header}>
      <div className={style.headerChilds}>
        <FontAwesomeIcon size='0.5x' icon={faCheckCircle} className={style.completed} />
      </div>
    </div>
    <div className={style.nameToDoItem} >{props.el.nameToDo}</div>
    <div className={style.content}>
      <div className={style.description} >{props.el.description}</div>
      <div className={style.trash} onClick={() => { props.deleteToDo(props.el.id) }} >
        <FontAwesomeIcon size='1x' icon={faTrash} className={style.deleteButton} />
      </div>
    </div>
  </div>
}




const mapStateToProps = (state) => {
  return {
    complited: state.todoReducer.complited
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteToDo: (id) => {
      dispatch(deleteCompletedTodoAC(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletedItem);
