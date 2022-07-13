import React, { useState, useEffect } from 'react';

const Counter = () => {
    let [count, setCount] = useState(0);
    useEffect(() => {
        console.log("aboba");
      });

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;