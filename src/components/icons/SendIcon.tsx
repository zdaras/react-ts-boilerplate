import React from 'react';

export const SendIcon = (props: { [key: string]: any }) => (
	<svg
		className="custom"
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="20.912"
		height="20.911"
		viewBox="0 0 20.912 20.911"
	>
		<path className="icon-background" d="M0,0H20.912V20.911H0Z" fill="transparent" />
		<path
			className="second-path"
			d="M4.205,17.978l13.905-6.407a.855.855,0,0,0,0-1.576L4.205,3.588a.854.854,0,0,0-1.2.779L3,8.316a.853.853,0,0,0,.749.848L14.8,10.783,3.749,12.393A.868.868,0,0,0,3,13.25L3.009,17.2A.854.854,0,0,0,4.205,17.978Z"
			transform="translate(0.289 -0.169)"
		/>
	</svg>
);

export default SendIcon;
