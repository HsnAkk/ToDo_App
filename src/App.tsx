import React, {useEffect} from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import TodoList from './components/todoList/TodoList';
import { Todo } from './type';
import { v1 as uuid } from "uuid";
import { useDispatch } from 'react-redux';
import { fetchTodo } from './actions/todoActions';
import './App.css';



const todoItems: Todo[] = [
    {
        id: uuid(),
        todo: "Learn React",
        priority: 'High',
        isComplete: false
    },
    {
        id: uuid(),
        todo: "Learn Redux-Toolkit",
        priority: 'Normal',
        isComplete: false
    },
    {
        id: uuid(),
        todo: "Learn Javascript",
        priority: 'Low',
        isComplete: true
    }
];


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodo(todoItems))
    }, [dispatch]);


    return (
        <div className="App">
            <Header />
            <main className="main-container">
                <Form />
                <TodoList />
            </main>
        </div>
    );
}

export default App;
