import React from 'react'
import Todo from './Todo'

const HighPriority = ({data, getTodos}) => {
    // console.log(data);
    const highPriority = data.filter((x) => x.priority === "High");
    // console.log(highPriority.map((x) => x._id))
    return (
        // <h1>Hello</h1>
        <div>
        {
            highPriority.length ? (
                <div className="priority-container">
                    <h2>High priority</h2>
                    {
                        highPriority.map((todo, key) => (
                        <Todo getTodos={getTodos} todo={todo} key={key} />
                    ))
                }
            
            </div>
            ) : null
            
        }
        </div>

        // <div>
        // {
        //     data.length ? (
        //         <div>
        //         <h1>High Priority</h1>
        //     {
        //         data.map((todo, key) => (
        //         <Todo getTodos={getTodos} todo={todo} key={key}/>
        //         ))
        //     }
        //     </div>
        //     ) : null
            
            
        // }
        // </div>
    )
}

export default HighPriority
