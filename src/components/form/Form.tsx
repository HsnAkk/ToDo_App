import React, {FormEvent, ChangeEvent, useState, useEffect} from 'react'
import { v1 as uuid } from "uuid";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteSelected } from '../../actions/todoActions';
import { IState } from '../../type';
import { State } from '../../reducers/rootReducer'
import { Wrapper } from './Form.styles';


const Form = () => {

    const [todo, setTodo] = useState<string>('');
    const [priority, setPriority] = useState<string>('Normal');

    const { selectedTodo }: IState = useSelector((state: State) => state.toDo);
    
    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
        event.target.name === 'todo' ? setTodo(event.target.value) : setPriority(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (selectedTodo.id) {
            dispatch(updateTodo({
                id: selectedTodo.id,
                todo,
                priority,
                isComplete: selectedTodo.isComplete
            }));
            dispatch(deleteSelected())
        } else {
            dispatch(addTodo({
                id: uuid(),
                todo,
                priority,
                isComplete: false
            }));
        }
        setTodo('');
        setPriority('Normal');
    }

    useEffect(() => {
        if (selectedTodo.id) {
            setTodo(selectedTodo.todo);
            setPriority(selectedTodo.priority)
        }
    }, [selectedTodo])


    return (
        <Wrapper onSubmit={handleSubmit}>
            <div>
                <h3>ToDo</h3>
                <input type="text" name="todo" value={todo} onChange={handleChange} />
            </div>
            <div>
                <h3>Priority</h3>
                <label htmlFor="high">High</label>
                <input type="radio" name="priority" id="high" checked= {priority === 'High'} value="High" onChange={handleChange} />
                <label htmlFor="normal">Normal</label>
                <input type="radio" name="priority" id="normal" checked= {priority === 'Normal'} value="Normal" onChange={handleChange} />
                <label htmlFor="low">Low</label>
                <input type="radio" name="priority" id="low" checked= {priority === 'Low'} value="Low" onChange={handleChange} />
            </div>
            <input type="submit" value={selectedTodo.id ? 'Edit' : 'Add'} className="btn" />
        </Wrapper >
    )
}

export default Form;
