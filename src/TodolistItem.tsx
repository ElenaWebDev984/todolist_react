import {Task} from './App.tsx'
import {Button} from "./Button.tsx";

type TodolistItemType = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: number) => void
}

export const TodolistItem = ({title, tasks, date, deleteTask}: TodolistItemType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title='+'/>
            </div>
            {tasks.length === 0 ? <p>There ara no tasks here</p>
                : (
                    <ul>
                        {tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                   <button onClick={() => deleteTask(task.id)}>x</button>
                                </li>
                            )
                        })}
                    </ul>
                )}
            <div>
                <Button title='All'/>
                <Button title='Active'/>
                <Button title='Completed'/>
            </div>
            <hr/>
            <div>{date}</div>
        </div>
    );
};

