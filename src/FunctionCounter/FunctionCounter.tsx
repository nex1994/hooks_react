/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo, useCallback } from "react";
import { CapacityBars } from "../CapacityBars";

type Mode = 'basic' | 'premium';

export const FunctionCounter = () => {
    const [counter, setCounter] = useState(0);
		const [mode, setMode] = useState<Mode>('basic')

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

		const makeReservation = useCallback(() => {
			console.log('Booking...', mode, bars.filter(bar => bar.isFull).length);
		}, [bars, mode])

    return (
      <div>
        <h2>Counter (function) (mode: {mode})</h2>
        <p>
          <button
            type="button"
            onClick={() => setMode("basic")}
            disabled={mode === "basic"}
          >
            Basic
          </button>

          <button
            type="button"
            onClick={() => setMode("premium")}
            disabled={mode === "premium"}
          >
            Premium
          </button>
        </p>

        <p>Counter value: {counter}</p>

        <button type="button" onClick={increment}>
          Increment
        </button>

        <br />
        <br />
        <CapacityBars bars={bars} onAction={makeReservation} />
      </div>
    );
};