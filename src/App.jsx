import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const App = () => {
	// Define a counter as the shared state
	const [counter, setCounter] = useState(0)

	// Function to increment the counter
	const incrementCounter = () => {
		setCounter(counter + 1)
	}

	return (
		<div>
			<h2>Parent Component</h2>
			<p>Counter: {counter}</p>
			{/* Pass state and update function as props to the child component */}
			<ChildComponent
				counter={counter}
				incrementCounter={incrementCounter}
			/>
		</div>
	)
}

export default App
