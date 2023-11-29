import CourseGoal from './CourseGoal';
import {type CourseGoal as CGoal} from '../App';

type CourseGoalListProps = {
	goals: CGoal[];
};

export default function CourseGoalList({goals}: CourseGoalListProps) {
	return (
		<ul>
			{goals.map((goal) => (
				<li key={goal.id}>
					<CourseGoal title={goal.title}>
						<p>{goal.description}</p>
					</CourseGoal>
				</li>
			))}
		</ul>
	);
}