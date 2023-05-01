import React from "react";

type ToDoListType = {
    title: string
    chislo?: number
    tasks: TaskType[]
}

type TaskType = {
    id: number;
    title: string;
    isDone: boolean
}
export const ToDoList = (props: ToDoListType) => {
    return (
        <div>
            <h3>{props.title} {props.chislo}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el) => {
                    return (
                        <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>)
}
