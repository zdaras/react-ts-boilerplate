import styled from 'styled-components';

import { IProps } from '.';

export const StyledTooltip = styled.span<IProps>`
	position: relative;
	display: inline-block;
	cursor: pointer;
	line-height: unset;

	& svg g,
	svg path.i {
		stroke: #a6a6c3;
		transition: all 0.1s ease;
	}

	& svg g[transform='translate(0 -2)'] circle,
	& svg g[transform='translate(0 -2)'] path {
		stroke: #a6a6c3;
		transition: all 0.1s ease;
	}

	& > span {
		position: absolute;
		background: #ffffff;
		box-shadow: 0px 2px 15px #65679529;
		width: ${props => props.width || '210px'};
		bottom: 118%;
		left: -110px;
		border-radius: 3px;
		padding: 15px;
		z-index: 5;
		font-size: 14px;
		color: #79798e;
		cursor: default;
		transition: all 0.3s ease;
		transition-delay: 0.1s;
		opacity: 0;
		visibility: hidden;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		&.tooltip-text:hover {
			opacity: 1;
			visibility: visible;
		}
	}

	> svg:hover,
	.trigger:hover {
		~ span.tooltip-text {
			opacity: 1;
			visibility: visible;
		}

		g,
		path.i {
			stroke: #1d93f7;
		}

		& svg g[transform='translate(0 -2)'] circle,
		& svg g[transform='translate(0 -2)'] path {
			fill: #1d93f7;
		}
	}

	&.trans-tooltip > span.tooltip-text {
		color: #2d2d52;
		min-width: 300px;
		padding: 26px 26px 16px;
	}

	&.mini > span.tooltip-text {
		min-width: 100px;
		width: unset;
		left: -71%;
	}
`;
