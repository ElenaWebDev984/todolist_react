import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";

export type Task = {
    title: string
    id: number
    isDone: boolean
}


export const App = () => {

    const tasks1: Task[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ]

    const tasks2: Task[] = [
        { id: 1, title: 'Hello world', isDone: true },
        { id: 2, title: 'I am Happy', isDone: false },
        { id: 3, title: 'Yo', isDone: false },
    ]

    return (
        <div className="app">
            <TodolistItem title='What to lean' tasks={tasks1} date='20.05.2025'/>
            <TodolistItem title='What to buy' tasks={tasks2}/>
        </div>
    )
}


