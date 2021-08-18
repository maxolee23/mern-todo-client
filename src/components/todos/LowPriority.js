import React from 'react'
import Todo from './Todo'

const LowPriority = ({data, getTodos}) => {
    const lowPriority = data.filter((x) => x.priority === "Low");
    // console.log(lowPriority)

    return (
        // <h1>Hello</h1>
        <div>
        {
            lowPriority.length ? (
                <div>
                    <h2>Low priority</h2>
                    {
                        lowPriority.map((todo, key) => (
                        <Todo getTodos={getTodos} todo={todo} key={key} />
                    ))
                }
            
            </div>
            ) : null
            
        }
        </div>
            
            
        // }
        // </div>
    )
}

export default LowPriority
