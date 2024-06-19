import {Task} from "./Todolist";


type Props = {
    task:Task
};
export const TaskEl = ({task}: Props) => {
    return (
        <li key={task.id}>
            <input type="checkbox" checked={task.isDone}/>
            <span>{task.title}</span>
        </li>
    );
};