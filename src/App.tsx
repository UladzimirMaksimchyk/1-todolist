import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export  type FilterValueType = 'All' | 'Active' | 'Completed'

function App() {
   // ]

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])
    //valueFilter=filterValue="completed"


    const removeTask = (id: number) => {
        // const newTasks=tasks.filter(el=>el.id!==id)
        //  setTasks(newTasks)
        setTasks(tasks.filter(el => el.id !== id))
    }

    //filterValue="completed"


    // let [valueFilter, setValueFilter] = useState<FilterValueType>('All')
    // const changeFilter = (filterValue: FilterValueType) => {
    //     setValueFilter(filterValue)
    // }
    //
    // let filteredTasks = tasks
    // if (valueFilter === 'Active') {
    //     filteredTasks = tasks.filter(el => !el.isDone)
    // }
    // if (valueFilter === 'Completed') {
    //     filteredTasks = tasks.filter(el => el.isDone)
    // }


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTask={removeTask}
                // changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
