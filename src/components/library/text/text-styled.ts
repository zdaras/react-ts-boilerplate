import styled, { css } from 'styled-components';

import { IProps } from '.';

export const TextStyled = styled.div<IProps>`
	color: ${props => props.theme.SECONDARY_FONT_COLOR};
	font-weight: ${props => (props.bold ? '600' : 'normal')};
	letter-spacing: 0.3px;

	a {
		color: #2590f7;
	}

	${props =>
		props.color &&
		css`
			color: ${props.color};
		`};

	${props =>
		props.align &&
		css`
			text-align: ${props.align};
		`};

	${props =>
		props.fontSize &&
		css`
			font-size: ${props.fontSize};
		`};

	${props =>
		props.display &&
		css`
			display: ${props.display};
		`};

	${props =>
		props.margin &&
		css`
			margin: ${props.margin};
		`};

	${props =>
		props.float &&
		css`
			float: ${props.float};
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
`;
