import React, {useState} from 'react';
import axios from 'axios';

const Todo = ({todo, getTodos}) => {
    // console.log(todo)
    const [checked, setChecked] = useState(todo.completed);
    const [priority, setPriority] = useState(todo.priority);

    // console.log(todo)

    const deleteBtn = async () => {
        await axios.delete(`http://localhost:4000/${todo._id}`);
        await getTodos();
    }


    const editBtn = async (e) => {
       
        const editData = {
            title: todo.title,
            completed: checked,
            priority: priority,
            user: todo.user
        };
        // console.log(editData);
        try {
            await axios.put(`http://localhost:4000/${todo._id}`, editData);
            e.preventDefault();
            await getTodos();
            
        } catch (error){
            console.log(error)
        }
        

        // console.log(checked);
        // console.log(priority)

    }
    
    return (
        <div>
            <p>{todo.title}</p>
            <input type="checkbox" value={!todo.completed} onChange={(e) => setChecked(e.target.value)} />

        
            <select onChange={(e) => setPriority(e.target.value)}>
                <option value={todo.priority} >{todo.priority}</option>
                { todo.priority !== "High" && <option value="High">High</option> }
                { todo.priority !== "Medium" && <option value="Medium">Medium</option>}
                { todo.priority !== "Low" && <option value="Low">Low</option> }
            </select>

            <button onClick={editBtn}>Edit</button>
            <button onClick={deleteBtn}>Delete</button>
        </div>
    )
}

export default Todo
