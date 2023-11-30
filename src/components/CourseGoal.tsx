// import {type ReactNode, type PropsWithChildren, type FC} from 'react';
import {type PropsWithChildren} from 'react';

// interface CourseGoalProps {
// 	title: string;
// 	children: ReactNode; // children are the JSX elements that are passed between opening and closing tags of a component.
// }

type CourseGoalProps = PropsWithChildren<{
	id: number;
	title: string;
	onDelete: (id: number) => void;
}>;

// *** regular function syntax ***
export default function CourseGoal({id, title, onDelete, children}: CourseGoalProps) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button onClick={() => onDelete(id)}>Delete</button>
		</article>
	);
}

// *** arrow function syntax ***
// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
// 	return (
// 		<article>
// 			<div>
// 				<h2>{title}</h2>
// 				{children}
// 			</div>
// 			<button>Delete</button>
// 		</article>
// 	);
// };

// export default CourseGoal;
