import React from 'react';

export const TooltipIcon = ({ ...props }) => (
	<svg
		className="custom tooltip-icon"
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		{...props}
	>
		<g transform="translate(-1513 -290)">
			<g fill="none" strokeWidth="1.5px" transform="translate(1513 290)">
				<circle stroke="none" cx="10" cy="10" r="10" />
				<circle fill="none" cx="10" cy="10" r="9.25" />
			</g>
			<g transform="translate(0 -2)">
				<path
					className="i"
					fill="#a6a6c3"
					d="M1,0A1,1,0,0,1,2,1V4A1,1,0,0,1,0,4V1A1,1,0,0,1,1,0Z"
					transform="translate(1522 301)"
				/>
				<circle fill="#a6a6c3" cx="1" cy="1" r="1" transform="translate(1522 298)" />
			</g>
		</g>
	</svg>
);

export default TooltipIcon;
