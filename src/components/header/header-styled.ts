import styled from 'styled-components';

export const HeaderStyled = styled.header`
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	transition: all 0.2s;
	padding: 30px 0;
	height: 114px;
`;

export const HeaderLeftMenu = styled.div`
	display: flex;
`;

export const UserIconStyled = styled.span`
	background-color: ${({ theme }) => theme.PRIMARY};
	border-radius: 100%;
	font-weight: 600;
	letter-spacing: 1px;
	color: #fff;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s;
	letter-spacing: 2px;

	span {
		text-transform: uppercase;
	}

	:hover {
		background-color: ${({ theme }) => theme.PRIMARY_ACTIVE};
	}
`;
