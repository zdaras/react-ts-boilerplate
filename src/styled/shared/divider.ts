import styled, { css } from 'styled-components';

import { responsive } from '@/styled/responsive';

export interface IProps {
	margin?: string;
	padding?: string;
	position?: string;
	left?: string;
	right?: string;
	shadow?: string;
	overflow?: string;
	top?: string;
	transition?: string;
	height?: string;
	zIndex?: number;
	transform?: string;
	display?: string;
	align?: string;
	color?: string;
}

export const Divider = styled.div<IProps>`
	display: block;
	width: 100%;
	position: relative;
	transition: all 0.3s ease;

	${props =>
		props.margin &&
		css`
			margin: ${props.margin};
		`};

	${props =>
		props.padding &&
		css`
			padding: ${props.padding};
		`};

	${props =>
		props.left &&
		css`
			left: ${props.left};
		`};

	${props =>
		props.right &&
		css`
			right: ${props.right};
		`};

	${props =>
		props.shadow &&
		css`
			@media ${responsive.sm} {
				box-shadow: ${props.shadow};
			}
		`};

	${props =>
		props.overflow &&
		css`
			overflow: ${props.overflow};
		`};

	${props =>
		props.position &&
		css`
			position: ${props.position};
		`};

	${props =>
		props.top &&
		css`
			top: ${props.top};
		`};

	${props =>
		props.transition &&
		css`
			transition: ${props.transition};
		`};

	${props =>
		props.height &&
		css`
			height: ${props.height};
		`};

	${props =>
		props.transform &&
		css`
			transform: ${props.transform};
		`};

	${props =>
		props.display &&
		css`
			display: ${props.display};
		`};

	${props =>
		props.zIndex &&
		css`
			z-index: ${props.zIndex};
		`};

	${props =>
		props.align &&
		css`
			text-align: ${props.align};
		`};

	${props =>
		props.color &&
		css`
			color: ${props.color};
		`};
`;
