import { useState, useEffect } from "react";

export const FunctionCounter = () => {
    const [counter, setCounter] = useState(0);

		const increment = () => {
			setCounter(state => state + 1)
		};

		const isOverLimit = counter > 5;

		console.log('one')

		useEffect(() => {
			console.log('hi');

			return () => {
				console.log('bye');
			}
		}, [isOverLimit])

		console.log('two')

    return (
        <div>
            <h2>Counter (function)</h2>
            <p>
                Counter value:
                {' '}
                {counter}
            </p>

        <button type='button' onClick={increment}>
                    Increment
            </button>

        </div>
    );
};