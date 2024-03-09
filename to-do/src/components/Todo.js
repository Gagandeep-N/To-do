import React, { useState } from "react";
import TodoItem from "./TodoItem";
import '../assets/Todo.css'

const Todo = () => {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleClick = () => {
        if (task.trim() !== '') {
            setTasks((prevTask) =>
                [...prevTask, task]
            );
            setTask('');
        }
    }

    const handleDelete = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }



    return (
        <div className="todo-container">
            <h1 className="heading">TODO LIST</h1>
            <div className="input-container">
                <input placeholder="Enter your task..." value={task} onChange={(e) => setTask(e.target.value)} className="task-input" />
                <button onClick={handleClick} className="add-button">Add Task</button>
            </div>
            <TodoItem tasks={tasks} onDelete={handleDelete} />
        </div>
    )
}

export default Todo;