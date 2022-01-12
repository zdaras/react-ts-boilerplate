import styled from 'styled-components';

export const StyledPagination = styled.ul`
	position: relative;
	display: block;
	padding: 0;
	margin: 1.5rem 0;
	text-align: right;

	li {
		list-style: none;
		display: inline-block;
		height: 44px;
		width: 44px;
		color: ${props => props.theme.SVG_FILL};
		cursor: pointer;
		line-height: 44px;
		text-align: center;
		border-radius: 50%;
		transition: all 0.3s ease;

		&.active {
			color: #328af7;
			pointer-events: none;
			background-color: ${props => props.theme.BTN_NORMAL_BG_COLOR};
		}
	}
`;
