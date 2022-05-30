import styled from 'styled-components';

export const AnchorStyled = styled.a`
	outline: none;
	text-decoration: none;
	transition: all 0.2s ease-in-out;
	display: inline-block;
	font-family: ${props => props.theme.DEFAULT_FONT};
	color: ${({ theme }) => theme.BTN_NORMAL_COLOR};

	:hover {
		color: ${({ theme }) => theme.BTN_NORMAL_COLOR_ACTIVE};
	}
`;
