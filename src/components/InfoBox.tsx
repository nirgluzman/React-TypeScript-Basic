import {type ReactNode} from 'react';

type InfoBoxPropos = {
	mode: 'hint' | 'warning';
	severity?: 'low' | 'medium' | 'high';
	children: ReactNode;
};

export default function InfoBox({mode, severity, children}: InfoBoxPropos) {
	// supports two modes - info, warning

	if (mode === 'hint') {
		return (
			<aside className='infobox infobox-hint'>
				<p>{children}</p>
			</aside>
		);
	}

	return (
		<aside className={`infobox infobox-warning warning--${severity}`}>
			{/* {mode === 'warning' ? <h2>Warning</h2> : null} */}
			<h2>Warning</h2>
			<p>{children}</p>
		</aside>
	);
}
