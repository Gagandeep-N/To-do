import React from "react";
import '../assests/TodoItem.css'

const TodoItem = ({tasks}) => {
    return (
        <div className="tasks-conatiner">
            
                {tasks.map((task, index) => (
                    <div className="tasks-list">
                        <div><input type="checkbox"/></div>
                    <div key={index}>{task}</div>
                    <div> <button>Delete</button> </div>
                    </div>
                ))}
            

        </div>
    )
}

export default TodoItem;