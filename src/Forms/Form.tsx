import { FormEventHandler, useState } from "react";

export const Form = () => {
	
	const [pizzaSize, setPizzaSize] = useState('');
	

	const handleSubmit: FormEventHandler = (event) => {
		event.preventDefault();
		console.log({ pizzaSize });
	}
	
	

	return (
		<div>
			<h2>Order pizza</h2>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Pick pizza size</legend>
					<p>
						<input
							type="radio"
							id="small"
							name="pizzaSize"
							value='S'
							checked={pizzaSize === 'S'}
							onChange={(event) => setPizzaSize(event.target.value)}/>
							{' '}
							<label htmlFor="small">Small</label>
					</p>

					<p>
						<input
							type="radio"
							id="medium"
							name="pizzaSize"
							value='M'
							checked={pizzaSize === 'M'}
							onChange={(event) => setPizzaSize(event.target.value)}/>
							{' '}
							<label htmlFor="medium">Medium</label>
					</p>

					<p>
						<input
							type="radio"
							id="large"
							name="pizzaSize"
							value='L'
							checked={pizzaSize === 'L'}
							onChange={(event) => setPizzaSize(event.target.value)}/>
							{' '}
							<label htmlFor="large">Large</label>
					</p>
					
					
				</fieldset>
				<div>
					<button type="submit">Order</button>
				</div>
			</form>
		</div>
	);
};