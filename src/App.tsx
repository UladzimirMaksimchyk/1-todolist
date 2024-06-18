import React from 'react';
import './App.css';
import {Task, Todolist} from "./Todolist";


function App() {
    const title_1='What to learn-1'
    const title_2='What to learn-2'

    const tasks1: Task[]= [
        { id: 1, title: 'HTML&CSS', isDone: true },//0
        { id: 2, title: 'JS', isDone: true }, //1
        { id: 3, title: 'ReactJS', isDone: false },//2
    ]

    const tasks2:Task[] = []

    const arr=[
        1, //0
        2,  //1
        3  //2
    ]

    return (
        <div className="App">
            <Todolist truck={title_1} tasks={tasks1} />
            <Todolist truck={title_2} tasks={tasks2} />
        </div>
    );
}

export default App;
