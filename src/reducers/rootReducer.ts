import { combineReducers } from 'redux';
import todoReducer from './todoReducer';



export const rootReducer = combineReducers({
    toDo: todoReducer
})

export default rootReducer;

export type State = ReturnType<typeof rootReducer>