import {useRef, type FormEvent} from 'react';

type NewGoalProps = {
	onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({onAddGoal}: NewGoalProps) {
	const goal = useRef<HTMLInputElement>(null); // the default init value of useRef() is 'undefined'.
	const summary = useRef<HTMLInputElement>(null);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const enteredGoal = goal.current!.value;
		const enteredSummary = summary.current!.value;

		// reseting the fields in the form after extracting the values
		event.currentTarget.reset();

		// referencing handleAddGoal to save the new values in goals array state.
		onAddGoal(enteredGoal, enteredSummary);
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
