import React from 'react';
import Todo from './Todo';

const MidPriority = ({data, getTodos}) => {
    const midPriority = data.filter((x) => x.priority === "Medium");
    // console.log(midPriority)
    return (
        <div>
        {
            midPriority.length ? (
                <div>
                    <h2>Medium priority</h2>
                    {
                        midPriority.map((todo, key) => (
                        <Todo getTodos={getTodos} todo={todo} key={key} />
                    ))
                }
            
            </div>
            ) : null
            
        }
        </div>
        
    )
}

export default MidPriority
