import React, { useState } from "react";
import '../assets/TodoItem.css';
import binImage from '../assets/Images/bin.png';

const TodoItem = ({ tasks, onDelete }) => {

    const [checked, setChecked] = useState(new Array(tasks.length).fill(false));

    const checkHandler = (index) => {
        setChecked(prev => {
            const newList = [...prev];
            newList[index] = !newList[index];
            return newList;
        });
    }

    return (
        <div className="tasks-container">
        {tasks.map((task, index) => (
            <div key={index} className="tasks-list">
                <div className="check-task">
                    <div><input type="checkbox" onClick={() => checkHandler(index)} /></div>
                    <div style={{ textDecoration: checked[index] ? "line-through" : "none" }}>{task}</div>
                </div>
                <div className="delete">
                    <button className="delete-button" onClick={() => onDelete(index)}>
                        <img alt='delete' src={binImage} height="16px" width="16px" />
                    </button>
                </div>
            </div>
        ))}
    </div>
);
}

export default TodoItem;