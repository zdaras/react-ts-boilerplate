import React from 'react';

export const CloseSmallIcon = (props: { [key: string]: any }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="9.903"
		height="9.903"
		viewBox="0 0 9.903 9.903"
		className="custom close-icon"
		{...props}
	>
		<path
			fill="#a6a6c3"
			d="M14.467,6.724,11.359,9.832,8.251,6.724A1.08,1.08,0,0,0,6.724,8.251l3.108,3.108L6.724,14.467a1.08,1.08,0,0,0,1.527,1.527l3.108-3.108,3.108,3.108a1.08,1.08,0,0,0,1.527-1.527l-3.108-3.108,3.108-3.108a1.079,1.079,0,0,0,0-1.527A1.1,1.1,0,0,0,14.467,6.724Z"
			transform="translate(-6.407 -6.408)"
		/>
	</svg>
);

export default CloseSmallIcon;
