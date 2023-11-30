import {type ReactNode} from 'react';

type InfoBoxPropos = {
	mode: 'info' | 'warning';
	children: ReactNode;
};

export default function InfoBox({mode, children}: InfoBoxPropos) {
	// supports two modes - info, warning

	if (mode === 'info') {
		return (
			<aside className='infobox infobox-hint'>
				<p>{children}</p>
			</aside>
		);
	}

	return (
		<aside className='infobox infobox-warning warning--medium'>
			{/* {mode === 'warning' ? <h2>Warning</h2> : null} */}
			<h2>Warning</h2>
			<p>{children}</p>
		</aside>
	);
}
