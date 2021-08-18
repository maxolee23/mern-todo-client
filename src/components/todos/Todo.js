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
            <p>{todo.title}</p>
            {todo.completed === true &&<p>Completed</p>}
            {todo.completed === false && <p>Not Completed</p>}

            {/* <input type="checkbox" value={!todo.completed} onChange={(e) => setChecked(e.target.value)} /> */}
            <button onClick={(e) => toggleShowEdit(!showEdit)}>Edit</button>
            <button onClick={deleteBtn}>Delete</button>

            <div>
                {
                    showEdit === true && 
                    <TodoDetails 
                    todo={todo} 
                    getTodos={getTodos} 
                    // completedArr={{
                    //     "Completed": true,
                    //     "Not Completed": false
                    // } }
                    priorityArr={["High", "Medium", "Low"]}
                    />
                }
            </div>
            
        </div>
    )
}

export default Todo
