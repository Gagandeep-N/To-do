import React from "react";
import '../assets/TodoItem.css';
import binImage from '../assets/Images/bin.png';

const TodoItem = ({ tasks, onDelete }) => {

    return (
        <div className="tasks-conatiner">

            {tasks.map((task, index) => (
                <div className="tasks-list">
                    <div className="check-task">
                        <div><input type="checkbox" /></div>
                        <div key={index}>{task}</div>
                    </div>
                    <div className="delete"> <button className="delete-button" onClick={() => onDelete(index)}><img alt='delete' src={binImage} height="16px" width="16px" /></button> </div>
                </div>
            ))}


        </div>
    )
}

export default TodoItem;