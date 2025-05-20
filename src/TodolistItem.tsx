import {filterValues, Task} from './App.tsx'
import {Button} from "./Button.tsx";
import {useState} from "react";

type TodolistItemType = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: string) => void
    changeFilter: (filter: filterValues) => void
    createTask: (title: string) => void
}

export const TodolistItem = ({title, tasks, deleteTask, changeFilter, createTask}: TodolistItemType) => {
    const [taskTitle, setTaskTitle] = useState('')

    const createTaskHandler = () => {
        createTask(taskTitle)
        setTaskTitle('')
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle}
                       onChange={event => setTaskTitle(event.currentTarget.value)}
                onKeyDown={event => console.log(event.key)}/>
                <Button title='+'
                        onClick={createTaskHandler}/>
            </div>
            {tasks.length === 0 ? <p>There ara no tasks here</p>
                : (
                    <ul>
                        {tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                   <Button title='x'
                                           onClick={() => deleteTask(task.id)}/>
                                </li>
                            )
                        })}
                    </ul>
                )}
            <div>
                <Button title='All' onClick={() => changeFilter('all')}/>
                <Button title='Active' onClick={() => changeFilter('active')}/>
                <Button title='Completed' onClick={() => changeFilter('completed')}/>
            </div>
        </div>
    );
};

