import {filterValues, Task} from './App.tsx'
import {Button} from "./Button.tsx";

type TodolistItemType = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: string) => void
    changeFilter: (filter: filterValues) => void
}

export const TodolistItem = ({title, tasks, deleteTask, changeFilter}: TodolistItemType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title='+' onClick={() => {}}/>
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

