import { useState, useEffect, useMemo } from "react";
import { CapacityBars } from "../CapacityBars";

export const FunctionCounter = () => {
    const [counter, setCounter] = useState(0);

		const increment = () => {
			setCounter(state => state + 1)
		};

		// const isOverLimit = counter > 5;


		useEffect(() => {
			// console.log('hi');

			return () => {
				// console.log('bye');
			}
		}, [])	


		const limit = Math.floor(counter / 10);

		const bars = useMemo(() => Array.from({ length: 4 }, (_, i) => {
			return {
				from: i * 10,
				to: (i + 1) * 10,
				isFull: counter >= (i + 1) * 10,
			};
		}), [limit]);

    return (
      <div>
        <h2>Counter (function)</h2>
        <p>Counter value: {counter}</p>

        <button type="button" onClick={increment}>
          Increment
        </button>

        <br />
        <br />
				<CapacityBars bars={bars} />
      </div>
    );
};