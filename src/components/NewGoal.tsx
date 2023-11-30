import {type FormEvent} from 'react';

export default function NewGoal() {
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget); // key/value pairs representing form fields and their values.
		console.log(formData.get('goal'), formData.get('summary'));
	}

	return (
		<form onSubmit={handleSubmit}>
			<p>
				{/* htmlFor -> when user clicks 'Your goal' text the browser will automatically put the focus in the corresponding input field. */}
				<label htmlFor='goal'>Your goal</label>
				<input
					id='goal'
					type='text'
					name='goal'
				/>
			</p>
			<p>
				<label htmlFor='summary'>Short summary</label>
				<input
					id='summary'
					type='text'
					name='summary'
				/>
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	);
}
