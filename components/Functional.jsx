import React from "react";

function Functional() {
    const [count, setCount] = React.useState(0);

    const increment = (prev)=>{
        setCount(prev => prev + 1);
    }

    const decrement = (prev)=>{
        setCount(prev => prev > 0 ? prev - 1 : 0);
        
    }

    return(
        <>
           <div className="left">
                <h3>Counter with Functional Component</h3>
                <h2>count: {count}</h2>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div> 
        </>
    )
}

export default Functional;