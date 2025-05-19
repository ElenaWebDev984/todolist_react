import {Task} from './App.tsx'

type TodolistItemType = {
    title: string
    tasks: Task[]
    date?: string
}

export const TodolistItem = ({title, tasks, date}: TodolistItemType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <input type="checkbox" checked={tasks[0].isDone}/> <span>HTML&CSS</span>
                </li>
                <li>
                    <input type="checkbox" checked={true}/> <span>JS</span>
                </li>
                <li>
                    <input type="checkbox" checked={false}/> <span>React</span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <hr/>
            <div>{date}</div>
        </div>
    );
};

