import {useRef, type FormEvent} from 'react';

export default function NewGoal() {
	const goal = useRef<HTMLInputElement>(null); // the defualt init value of useRef() is 'undefined'.
	const summary = useRef<HTMLInputElement>(null);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const enteredGoal = goal.current!.value;
		const enteredSummary = summary.current!.value;
	}

	return (
		<form onSubmit={handleSubmit}>
			<p>
				{/* htmlFor -> when user clicks 'Your goal' text the browser will automatically put the focus in the corresponding input field. */}
				<label htmlFor='goal'>Your goal</label>
				<input
					id='goal'
					type='text'
					ref={goal}
				/>
			</p>
			<p>
				<label htmlFor='summary'>Short summary</label>
				<input
					id='summary'
					type='text'
					ref={summary}
				/>
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	);
}
