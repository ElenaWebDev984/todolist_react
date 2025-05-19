import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";

export const App = () => {
    return (
        <div className="app">
            <TodolistItem title='What to lean'/>
            <TodolistItem title='What to buy'/>
            <TodolistItem title='What to read'/>
        </div>
    )
}


