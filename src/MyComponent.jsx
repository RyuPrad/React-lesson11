import React, { useState } from "react";

function MyComponent() {
    
    const [count, setCount] = useState(0);

    // ! Takes the PENDING state to calculate NEXT state.
    // ! React puts your updated function in a queue (waiting in line)
    // ! During the next render, it will call them in the same order.

    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const restart = () => {
        setCount(0)
    }

    return (
        <>
            <h1>{count}</h1>  
            <button onClick={increment}>Add</button>
            <button onClick={restart}>Reset </button>
            <button onClick={decrement}>Minus</button>
        </>
    );
};

export default MyComponent;