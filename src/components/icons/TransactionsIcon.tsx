import React from 'react';

export const TransactionsIcon = (props: { [key: string]: any }) => (
	<svg
		{...props}
		className="custom"
		xmlns="http://www.w3.org/2000/svg"
		width="19.798"
		height="19.798"
		viewBox="0 0 19.798 19.798"
	>
		<path className="icon-background" d="M0,0H19.8V19.8H0Z" fill="transparent" />
		<path
			className="second-path"
			d="M16.2,2.65h-.825V1.825a.825.825,0,1,0-1.65,0V2.65h-6.6V1.825a.825.825,0,1,0-1.65,0V2.65H4.65A1.642,1.642,0,0,0,3.008,4.3L3,15.848A1.649,1.649,0,0,0,4.65,17.5H16.2a1.655,1.655,0,0,0,1.65-1.65V4.3A1.655,1.655,0,0,0,16.2,2.65Zm-.825,13.2h-9.9a.827.827,0,0,1-.825-.825V6.774H16.2v8.249A.827.827,0,0,1,15.373,15.848ZM7.124,8.424H9.6a.827.827,0,0,1,.825.825v2.475a.827.827,0,0,1-.825.825H7.124a.827.827,0,0,1-.825-.825V9.249A.827.827,0,0,1,7.124,8.424Z"
			transform="translate(-0.525 -0.175)"
		/>
	</svg>
);

export default TransactionsIcon;
