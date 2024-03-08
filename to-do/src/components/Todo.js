import React, {useState} from "react";
import TodoItem from "./TodoItem";
import '../assests/Todo.css'

const Todo = () => {

    const [task, setTask] = useState('');
    const [tasks,setTasks] = useState([]);

    const handleClick = () => {
        if (task.trim() !== ''){
            setTasks((prevTask)=>
                [...prevTask,task]
            );
            setTask('');
        }
    }

    return(
        <div className="todo-container">
            <div className="input-container">
            <input placeholder="Enter your task..." value={task} onChange={(e)=>setTask(e.target.value)} className="task-input"/>
            <button onClick={handleClick}>Add Task</button>
            </div>
            <TodoItem tasks={tasks}/>
        </div>
    )
}

export default Todo;