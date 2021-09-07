import { ActionType } from './actionTypes';
import { Todo } from '../type';


interface FetchTodoAction {
    type: ActionType.FETCH_TODO
    payload: Todo[]
}

interface AddTodoAction {
    type: ActionType.ADD_TODO
    payload: Todo
}

interface EditTodoAction {
    type: ActionType.EDIT_TODO
    payload: string
}

interface UpdateTodoAction {
    type: ActionType.UPDATE_TODO
    payload: Todo
}

interface DeleteTodoAction {
    type: ActionType.DELETE_TODO
    payload: string
}

interface CompletedTodoAction {
    type: ActionType.COMPLETED_TODO
    payload: string
}

interface DeleteSelectedAction {
    type: ActionType.DELETE_SELECTED
}

export type Action = FetchTodoAction | AddTodoAction | EditTodoAction | DeleteTodoAction | CompletedTodoAction | UpdateTodoAction | DeleteSelectedAction
    