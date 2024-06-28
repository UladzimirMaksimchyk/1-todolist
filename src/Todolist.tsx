import { FilterValueType, TaskType } from "./App";
import {Button} from "./Button";
import {useState} from "react";

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask:(id:number)=>void
	// changeFilter:(filterValue:FilterValueType)=>void
}



export const Todolist = ({title, tasks,removeTask,}: PropsType) => {

	let [valueFilter, setValueFilter] = useState<FilterValueType>('All')

	const changeFilter = (filterValue: FilterValueType) => {
		setValueFilter(filterValue)
	}

	  let filteredTasks = tasks
	if (valueFilter === 'Active') {
		filteredTasks = tasks.filter(el => !el.isDone)
	}
	if (valueFilter === 'Completed') {
		filteredTasks = tasks.filter(el => el.isDone)

	}


	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input/>
				<Button title={'+'}/>
			</div>
			{
				filteredTasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{filteredTasks.map((task) => {
							return <li key={task.id}>
								<button onClick={()=>removeTask(task.id)}>X</button>
								<input type="checkbox" checked={task.isDone}/>
								<span>{task.title}</span>
							</li>
						})}
					</ul>
			}
			<div>
				<button onClick={()=>changeFilter('All')}>All</button>
				<button onClick={()=>changeFilter('Active')}>Active</button>
				<button onClick={()=>changeFilter('Completed')}>Completed</button>
				{/*<Button title={'All'}/>*/}
				{/*<Button title={'Active'}/>*/}
				{/*<Button title={'Completed'}/>*/}
			</div>
		</div>
	)
}
