import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HighPriority from './HighPriority';
import MidPriority from './MidPriority';
import LowPriority from './LowPriority';
import NewTodo from './NewTodo';

const TodoContainer = () => {
    const [data, setData] = useState();
    

    async function getTodos(){
        const res = await axios.get("http://localhost:4000/");

        // console.log(res);
        setData(res.data);
        // setNoTodos(false);
            
        }

       
        

    useEffect(() => {
        getTodos()
    }, []);


 
    return (
        <div>
            <NewTodo getTodos={getTodos}/>
                {
                    !data || !data.length ? 
                    (
                        <div>
                            <h1>no todos yet</h1>
                        </div>
                    ) : (
                        <div>
                        {/* <HighPriority data={todos.filter((x) => x.priority === "High")} getTodos={getTodos}/>
                        <MidPriority data={todos.filter((x) => x.priority === "Medium")} getTodos={getTodos}/>
                        <LowPriority data={todos.filter((x) => x.priority === "Low")} getTodos={getTodos}/> */}
                        <HighPriority data={data} getTodos={getTodos}/>
                        <MidPriority data={data} getTodos={getTodos} />
                        <LowPriority data={data} getTodos={getTodos} />
                        </div>
                    )
                }
     
        </div>
    )
}

export default TodoContainer
