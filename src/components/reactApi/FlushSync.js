import React, { useState } from "react";
import { flushSync } from "react-dom";

function Foo() {
    const [count, setCount] = useState(2);
    const [flag, setFlag] = useState(false);

    function handleClick() {
        flushSync(() => {
            setCount((c) => c + 1);
        });

        flushSync(() => {
            setFlag((f) => !f);
        });
    }

    console.log("rerend");

    return (
        <>
            <button onClick={handleClick}>Change counter</button>
            <div>
                {flag ? "Odd" : "Even"} {count}
            </div>
        </>
    );
}

function FlushSync() {
    return (
        <div>
            <Foo />
        </div>
    );
}

export default FlushSync;
