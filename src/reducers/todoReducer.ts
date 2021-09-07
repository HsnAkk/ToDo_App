import { ActionType } from '../actions/actionTypes';
import { Action } from '../actions/actions';
import {IState } from '../type';



const initialState: IState = {
    todos: [],
    selectedTodo: {
        id: '',
        todo: '',
        priority: '',
        isComplete: false
    }
};


const todoReducer = (state: IState= initialState, action: Action) => {
    switch (action.type) {

        case ActionType.FETCH_TODO:
            return {
                ...state,
                todos: action.payload,
            }
        case ActionType.ADD_TODO : 
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case ActionType.EDIT_TODO : 
            return {
                ...state,
                selectedTodo: state.todos.filter(item => item.id === action.payload)[0]
            }
        case ActionType.UPDATE_TODO : 
            return {
                ...state,
                todos: state.todos.map(item => item.id === action.payload.id ? {...item, ...action.payload} : item)
            }
        case ActionType.DELETE_TODO : 
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload)
            }
        case ActionType.COMPLETED_TODO : 
            return {
                ...state,
                todos: state.todos.map(item => item.id === action.payload ? { ...item, isComplete: !item.isComplete } : item)
            }
        case ActionType.DELETE_SELECTED : 
            return {
                ...state,
                selectedTodo: {...state.selectedTodo, 
                    id: '',
                    todo: '',
                    priority: '',
                    isComplete: false
                }
            }
        default :
            return state
    }
}

export default todoReducer;