import {type ReactNode} from 'react';
import {type CourseGoal as CGoal} from '../App';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

type CourseGoalListProps = {
	goals: CGoal[];
	onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
	// goals array is empty - no goals have been entered.
	if (goals.length === 0) {
		return <InfoBox mode='info'>You have no course goals yet, start adding some!</InfoBox>;
	}

	let warningBox: ReactNode;

	if (goals.length >= 4) {
		warningBox = (
			<InfoBox mode='warning'>
				You're collecting a lot of goals, don't put too much on your plate!
			</InfoBox>
		);
	}

	return (
		<>
			{warningBox}
			<ul>
				{goals.map((goal) => (
					<li key={goal.id}>
						<CourseGoal
							id={goal.id}
							title={goal.title}
							onDelete={onDeleteGoal}>
							<p>{goal.description}</p>
						</CourseGoal>
					</li>
				))}
			</ul>
		</>
	);
}
