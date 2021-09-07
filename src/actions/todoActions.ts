import { ActionType } from './actionTypes';
import { Todo } from '../type';


export const fetchTodo = (todos: Todo[]) => {
    return {
        type: ActionType.FETCH_TODO,
        payload: todos
    }
}

export const addTodo = (todo: Todo) => {
    return {
        type: ActionType.ADD_TODO,
        payload: todo
    }
}

export const editTodo = (ID: string) => {
    return {
        type: ActionType.EDIT_TODO,
        payload: ID
    }
}

export const updateTodo = (obj: Todo) => {
    return {
        type: ActionType.UPDATE_TODO,
        payload: obj
    }
}

export const deleteTodo = (ID: string) => {
    return {
        type: ActionType.DELETE_TODO,
        payload: ID
    }
}

export const completedTodo = (ID: string) => {
    return {
        type: ActionType.COMPLETED_TODO,
        payload: ID
    }
}

export const deleteSelected = () => {
    return {
        type: ActionType.DELETE_SELECTED
    }
}