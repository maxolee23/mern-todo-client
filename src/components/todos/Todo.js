import React, {useState} from 'react';
import axios from 'axios';
// import {useHistory} from 'react-router-dom';
import TodoDetails from './TodoDetails';


const Todo = ({todo, getTodos}) => {
    const [showEdit, toggleShowEdit] = useState(false);
    // const history = useHistory("/");

    const deleteBtn = async () => {
        // console.log("clicked delete")
        try{
            await axios.delete(`http://localhost:4000/${todo._id}`);
            // history.push("/")
            
            await getTodos();
        } catch (error) {
            console.log(error)
        }
        
    }
    
    return (
        <div>
        <div className="single-todo-container">
            <p className="single-todo-title">{todo.title}</p>
            {todo.completed === true &&<p className="single-todo-complete">Completed</p>}
            {todo.completed === false && <p className="single-todo-incomplete">Not Completed</p>}

            {/* <input type="checkbox" value={!todo.completed} onChange={(e) => setChecked(e.target.value)} /> */}
            <button className="single-todo-edit" onClick={(e) => toggleShowEdit(!showEdit)}>Edit</button>
            <button className="single-todo-delete" onClick={deleteBtn}>Delete</button>
            
        </div>
        <div>
        {
            showEdit === true && 
            <TodoDetails 
            todo={todo} 
            getTodos={getTodos} 
            priorityArr={["High", "Medium", "Low"]}
            />
        }
    </div>
    </div>
    )
}

export default Todo
