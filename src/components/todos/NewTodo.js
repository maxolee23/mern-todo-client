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
        
        <div>
           <h3>Create a todo</h3>
           <form onSubmit={submit}>
               <label>Title</label>
               <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                <div>
                    <p>Priority: </p>
                    <select onChange={(e) => setPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <button type="submit">Create</button>
           </form>
        </div>
    )
}

export default NewTodo
