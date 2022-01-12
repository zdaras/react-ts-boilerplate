import styled from 'styled-components';

export const TopAlertContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 1;
`;

export const TopAlertStyled = styled.div<{ type?: 'info' | 'success' | 'warning' | 'danger' }>`
	height: 34px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
	letter-spacing: 0.4px;
	font-size: 14px;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		text-align: center;
		height: 100%;
	}

	background: ${({ type }) => {
		switch (type) {
			case 'info':
				return '#6ab1e0';
			case 'success':
				return '#26B980';
			case 'warning':
				return '#fff6a6';
			case 'danger':
				return '#dc5046';
			default:
				return '#fff6a6';
		}
	}};
`;

export const AlertIcon = styled.div`
	position: absolute;
	right: 20px;
	bottom: 9px;
	cursor: pointer;
`;
