import React from 'react';

export const LinkIcon = (props: { [key: string]: any }) => (
	<svg
		className="custom"
		xmlns="http://www.w3.org/2000/svg"
		width="32.482"
		height="32.482"
		viewBox="0 0 32.482 32.482"
		{...props}
	>
		<g transform="translate(0 17.092) rotate(-48)">
			<path d="M0,0H23V23H0Z" fill="none" />
			<path
				fill="#2590f7"
				d="M3.805,12A3.028,3.028,0,0,1,6.75,8.9h3.8V7H6.75A4.882,4.882,0,0,0,2,12a4.882,4.882,0,0,0,4.75,5h3.8V15.1H6.75A3.028,3.028,0,0,1,3.805,12ZM7.7,13h7.6V11H7.7Zm8.55-6h-3.8V8.9h3.8A3.028,3.028,0,0,1,19.195,12a3.028,3.028,0,0,1-2.945,3.1h-3.8V17h3.8A4.882,4.882,0,0,0,21,12,4.882,4.882,0,0,0,16.25,7Z"
				transform="translate(0 -0.5)"
			/>
		</g>
	</svg>
);

export default LinkIcon;
