import React from 'react';

export class ClassCounter extends React.Component {
		state = {
				value: 0,
		}

		setValue = (value: number) => {
				this.setState({ value });
		}

		render() {

				const useState = () :[number, (v: number) => void] => {
					return [this.state.value, this.setValue];
				};

				// eslint-disable-next-line react-hooks/rules-of-hooks
				const [value, setValue] = useState();
				return (
						<div>
								<h2>Counter (class)</h2>
								<p>
										Selected value:
										{' '}
										{value}
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
						</div>
				)
		}
}