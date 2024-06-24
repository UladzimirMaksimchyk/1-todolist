import './App.css';
import {Todolist_1} from "./Todolist_1";

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

export function App_1() {
	const tasks1: Array<TaskType> = [
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'ReactJS', isDone: false },
		{ id: 4, title: 'Redux', isDone: false },
		{ id: 5, title: 'Typescript', isDone: false },
		{ id: 6, title: 'RTK query', isDone: false },
	]

	const tasks2: Array<TaskType> = [
		// { id: 1, title: 'Hello world', isDone: true },
		// { id: 2, title: 'I am Happy', isDone: false },
		// { id: 3, title: 'Yo', isDone: false },
	]

	return (
		<div className="App">
			<Todolist_1 title="What to learn" tasks={tasks1} />
			<Todolist_1 title="Songs" tasks={tasks2}/>
		</div>
	);
}

