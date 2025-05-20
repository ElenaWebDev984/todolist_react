import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";
import {v1} from "uuid";

export type Task = {
    title: string
    id: string
    isDone: boolean
}

export type filterValues = 'all' | 'active' | 'completed'


export const App = () => {
    const [filter, setFilter] = useState<filterValues>('all');

    const [tasks, setTasks] = useState<Task[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Typescript', isDone: false},
        {id: v1(), title: 'RTK query', isDone: false},
    ]);

    const deleteTask = (taskId: string) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }

    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone)
    }

    const changeFilter = (filter: filterValues) => {
        setFilter(filter)
    }

    const createTask = () => {
        const newTask = {id: v1(), title: 'New task', isDone: false}
        const newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }


    return (
        <div className="app">
            <TodolistItem title='What to lean'
                          tasks={filteredTasks}
                          deleteTask={deleteTask}
                          changeFilter={changeFilter}
                          createTask={createTask}/>
        </div>
    )
}


