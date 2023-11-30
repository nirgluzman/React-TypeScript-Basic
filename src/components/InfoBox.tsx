import {type ReactNode} from 'react';


// Discriminated Unions
type HintBoxProps = {
	mode: 'hint';
	children: ReactNode;
};
type WarningBoxProps = {
	mode: 'warning';
	severity: 'low' | 'medium' | 'high';
	children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
	// supports two modes - info, warning

	const {mode, children} = props;

	// 'hint' mode
	if (mode === 'hint') {
		return (
			<aside className='infobox infobox-hint'>
				<p>{children}</p>
			</aside>
		);
	}

	// 'warning' mode
	const {severity} = props;

	return (
		<aside className={`infobox infobox-warning warning--${severity}`}>
			{/* {mode === 'warning' ? <h2>Warning</h2> : null} */}
			<h2>Warning</h2>
			<p>{children}</p>
		</aside>
	);
}
