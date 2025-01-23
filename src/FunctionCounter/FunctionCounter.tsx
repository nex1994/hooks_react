import { useState } from "react";

export const FunctionCounter = () => {

    const [value, setValue] = useState(0);
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h2>Counter (function)</h2>
            <p>
                Selected value:
                {' '}
                {value}
            </p>

            <p>
                Counter value:
                {' '}
                {counter}
            </p>
            <button type='button' onClick={() => setValue(10)}>
                    10
            </button>

            <button type='button' onClick={() => setValue(20)}>
                    20
            </button>

            <button type='button' onClick={() => setValue(30)}>
                    30
            </button>

            <button type='button' onClick={() => setCounter(counter + 1)}>
                    +
            </button>

        </div>
    );
};