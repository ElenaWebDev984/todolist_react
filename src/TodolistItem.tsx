import {filterValues, Task} from './App.tsx'
import {Button} from "./Button.tsx";
import {useRef} from "react";

type TodolistItemType = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: string) => void
    changeFilter: (filter: filterValues) => void
    createTask: (title: string) => void
}

export const TodolistItem = ({title, tasks, deleteTask, changeFilter, createTask}: TodolistItemType) => {
    const inputRef = useRef<HTMLInputElement>(null)  // TODO inputRef

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input ref={inputRef}/>
                <Button title='+' onClick={() => {
                    if(inputRef.current) {
                        createTask(inputRef.current.value)
                        inputRef.current.value = ''
                    }
                }}/>
            </div>
            {tasks.length === 0 ? <p>There ara no tasks here</p>
                : (
                    <ul>
                        {tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                   <Button title='x' onClick={() => deleteTask(task.id)}/>
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
            <hr/>
        </div>
    );
};

