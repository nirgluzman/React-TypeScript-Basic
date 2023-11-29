import {type PropsWithChildren, type ReactNode} from 'react';

// interface CourseGoalProps {
// 	title: string;
// 	children: ReactNode; // children are the JSX elements that are passed between opening and closing tags of a component.
// }

type CourseGoalProps = PropsWithChildren<{title: string}>;

export default function CourseGoal({title, children}: CourseGoalProps) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button>Delete</button>
		</article>
	);
}
