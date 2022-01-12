import React from 'react';

export const EyeShow = (props: { [key: string]: any }) => (
	<svg className="custom" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" {...props}>
		<path style={{ fill: 'transparent' }} d="M0,0H20V20H0Z" />
		<path
			className="second-path"
			d="M10.17,4.5A9.859,9.859,0,0,0,1,10.763a9.844,9.844,0,0,0,18.339,0A9.859,9.859,0,0,0,10.17,4.5Zm0,10.439a4.175,4.175,0,1,1,4.168-4.175A4.173,4.173,0,0,1,10.17,14.939Zm0-6.681a2.505,2.505,0,1,0,2.5,2.505A2.5,2.5,0,0,0,10.17,8.258Z"
			transform="translate(-0.17 -0.763)"
		/>
	</svg>
);

export default EyeShow;
