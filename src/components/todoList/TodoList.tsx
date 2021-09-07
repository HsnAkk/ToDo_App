import React from 'react';
import { Wrapper} from './TodoList.styles';
import { IState } from '../../type';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { IoMdDoneAll } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../reducers/rootReducer'
import { completedTodo, deleteTodo, editTodo } from '../../actions/todoActions';


const TodoList = () => {
    
    const {todos}:IState = useSelector((state: State) => state.toDo)
    
    const dispatch = useDispatch();

    const handleComplete = (ID:string):void => {
        dispatch(completedTodo(ID));
    }

    const handleDelete = (ID:string):void => {
        dispatch(deleteTodo(ID));
    }

    const handleEdit = (ID:string):void => {
        dispatch(editTodo(ID));
    }


    return (
        <Wrapper>
            {
                todos.map(({id, todo, priority, isComplete}) => (
                    <div className='todo' key={id}>
                        <p className={isComplete ? 'todo__task completed' : 'todo__task'}>{todo}</p> 
                        <p className="todo__priority">{priority}</p>
                        <div className="todo__buttons">
                            <IoMdDoneAll title="Done" onClick={() => handleComplete(id)}/>
                            <MdEdit title="Edit" onClick={() => handleEdit(id)}/>
                            <MdDeleteForever title="Delete" onClick={() => handleDelete(id)}/>
                        </div>
                    </div>
                ))
            }
        </Wrapper>
    )
}

export default TodoList;
