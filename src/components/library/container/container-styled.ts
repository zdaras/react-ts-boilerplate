import styled from 'styled-components';

export const ContainerStyled = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	transition: all 0.15s ease;
	background-color: ${props => props.theme.BG_COLOR};
`;
