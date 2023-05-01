import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

const task1 = [
    {id: 1, title: 'text1', isDone: false},
    {id: 2, title: 'text2', isDone: true},
    {id: 3, title: 'text3', isDone: true},
]
const task2 = [
    {id: 1, title: 'text4', isDone: true},
    {id: 2, title: 'text5', isDone: false},
    {id: 3, title: 'text6', isDone: false},
]

function App() {
    return (
        <div className="App">
            <ToDoList title={'Hello'} chislo={1} tasks={task1}/>
            <ToDoList title={'World'} tasks={task2}/>
        </div>
    );
}

export default App;
