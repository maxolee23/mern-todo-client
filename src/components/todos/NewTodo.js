import React, {useState} from 'react';
import axios from 'axios';

const NewTodo = ({getTodos}) => {
        const [title, setTitle] = useState("");
        const [priority, setPriority] = useState("High");

        const submit = async (e) => {
            
            const data = {title, priority};
            try {
                await axios.post("http://localhost:4000/", data);
                await getTodos();
                setTitle("")
                setPriority("High")
                e.preventDefault();
            } catch (err) {
                console.log(err);
            }
            
        
        }
    return (
        
        <div className="todo-create-container">
           <h3 className="todo-create-title">Create a todo</h3>

           <form className="todo-create-form" onSubmit={submit}>
               <div className="todo-create-title">
               <label>Title</label>
               <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
               </div>

                <div className="todo-create-priority">
                    <label>Priority: </label>
                    <select onChange={(e) => setPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <div className="todo-create-btn-container">
                <button className="todo-submit" type="submit">Create</button>
                </div>
           </form>
        </div>
    )
}

export default NewTodo
