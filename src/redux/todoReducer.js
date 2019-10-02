const DELETE_TODO = 'DELETE_TODO';
const DELETE_COMPLETED_TODO = 'DELETE_COMPLETED_TODO';
const ADD_NEW_TODO = 'ADD_NEW_TODO';
const CHANGE_TEXT_TODO = 'CHANGE_TEXT_TODO';
const CHANGE_NAME_TODO = 'CHANGE_NAME_TODO';
const CHANGE_BACKGROUND_APP = 'CHANGE_BACKGROUND_APP';
const REDIRECT_TODO_IN_COMPLETED = 'REDIRECT_TODO_IN_COMPLETED';

const initialState = {
    status: false,
    toDoCount: null,
    toDo: [],
    complited: [],
    complitedCount: null,
    
}
let toDoId = null;
const reducer = (state=initialState, action) => {
    switch (action.type){
        case DELETE_TODO:
            let newdelToDo = state.toDo.filter(tl => {
                return tl.id !== action.id
            })
            return { ...state, 
                toDo: newdelToDo ,
                toDoCount: newdelToDo.length}
        case DELETE_COMPLETED_TODO:
            debugger
            let newdelCompletedToDo = state.complited.filter(tl => {
                return tl.id !== action.id
            })
            return { ...state, 
                complited: newdelCompletedToDo ,
                complitedCount: newdelCompletedToDo.length}
        case ADD_NEW_TODO:
            toDoId++;
           
            let date = new Date().toLocaleString();
            let newToDo = {id: toDoId,nameToDo: '...type name Todo' ,description: '...type description',priority: 'low', date: date};
            let toDo = [...state.toDo, newToDo];
            return { ...state, 
               toDo: toDo,
               toDoCount: toDo.length
            }
        case REDIRECT_TODO_IN_COMPLETED:
            let newComletedItem;
            let newTodoItems = state.toDo.filter(el =>{
                if(el.id !==action.id){
                    return el;
                }
                else {
                      newComletedItem = el;
                }
            })
            return { ...state, 
               toDo:  newTodoItems,
               complited: [...state.complited, newComletedItem ],
               toDoCount: [state.toDoCount-1],
               complitedCount: state.complited.length+1
            }
        case CHANGE_TEXT_TODO:
                
                let newTasks = state.toDo.map(t => {
                    if (t.id !== action.id) {
                        return t;
                    }
                    else {
                        return { ...t,
                            description: action.description };
                    }
                });

            return { ...state, 
               toDo: newTasks
            }
        case CHANGE_NAME_TODO:
                
                let newToDoItems = state.toDo.map(t => {
                    if (t.id !== action.id) {
                        return t;
                    }
                    else {
                        return { ...t,
                            nameToDo: action.nameToDo };
                    }
                });

            return { ...state, 
               toDo: newToDoItems
            }
        case CHANGE_BACKGROUND_APP:
           
            return { ...state, 
                status: action.status
            }
        default: return state
    }
}
export const addNewToDoThunkAC = () => (dispatch,getState)=>{
    debugger
    dispatch(addNewToDoAC());
    let state = getState().todoReducer.toDo;
    let saveToDoItems = JSON.stringify(state);
        localStorage.setItem("our-state", saveToDoItems);
        
}
export const deleteTodoAC = (id)=>({type:DELETE_TODO, id});
export const deleteCompletedTodoAC = (id)=>({type:DELETE_COMPLETED_TODO, id});
export const addCurrentTodoInCompletedAC = (id)=>({type:REDIRECT_TODO_IN_COMPLETED, id});
export const changeTextAC = (id,description)=>({type:CHANGE_TEXT_TODO, id, description});
export const changeNameToDoAC = (id,nameToDo)=>({type:CHANGE_NAME_TODO, id, nameToDo});
export const addNewToDoAC = ()=>({type:ADD_NEW_TODO});
export const changeBackgroundAppAC = (status)=>({type:CHANGE_BACKGROUND_APP, status});

export default reducer;
