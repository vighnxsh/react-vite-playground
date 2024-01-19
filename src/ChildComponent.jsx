import React from 'react'

const ChildComponent = ({ counter, incrementCounter }) => {
	return (
		<div>
			<h3>Child Component</h3>
			{/* Display shared counter */}
			<p>Counter in Child: {counter}</p>

			{/* Button to increment the counter */}
			<button onClick={incrementCounter}>Increment Counter</button>
		</div>
	)
}

export default ChildComponent
