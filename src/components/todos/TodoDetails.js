import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const TodoDetails = ({todo, getTodos, priorityArr}) => {
    const [todoTitle, setTodoTitle] = useState(todo.title)
    const [todoComplete, setTodoComplete] = useState(todo.completed);
    const [todoPriority, setTodoPriority] = useState(todo.priority);

    const history = useHistory();




    const editBtn = async (e) => {


        const updateData = {
            title: todoTitle,
            completed: todoComplete,
            priority: todoPriority,
            _id: todo._id
        };


        try {
            axios.patch(`http://localhost:4000/${todo._id}`, updateData)
            .then(console.log(updateData))
           
            await getTodos()
            e.preventDefault()
            history.push("/")
           
            
            
        } catch (error){
            console.log(error)
        }

    }

    // console.log(priorityArr)

    // console.log(todoComplete)
    console.log(todoPriority)

    return (
        <div>
                <form>
                    <input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />

                            {  todoComplete === true ? 
                            (
                            <select onChange={(e) => setTodoComplete(e.target.value)}>
                                <option value={true}>Completed</option>
                                <option value={false}>Not Completed</option>
                            </select>
                            ) 
                            : 
                            (
                            <select onChange={(e) => setTodoComplete(e.target.value)}>
                                <option value={false}>Not Completed</option>
                                <option value={true}>Completed</option>
                            </select>
                            )
                            }

                            {
                                todoPriority === "High" ?
                                (
                                <select defaultValue={todoPriority} onChange={(e) => setTodoPriority(e.target.value)}>
                                    <option defaultValue={todoPriority} >{todoPriority}</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                                ) : todoPriority === "Medium" ?
                                (
                                    <select defaultValue={todoPriority} onChange={(e) => setTodoPriority(e.target.value)}>
                                    <option value="High">High</option>
                                    <option defaultValue={todoPriority} >{todoPriority}</option>
                                    <option value="Low">Low</option>
                                    </select>
                                ) : 
                                (
                                    <select defaultValue={todoPriority} onChange={(e) => setTodoPriority(e.target.value)}>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value={todoPriority} >{todoPriority}</option>
                                    </select>
                                )
                            }

                        <button onClick={editBtn}>Save Changes</button> 
             
                </form>
                </div>
    )
}
        

export default TodoDetails
