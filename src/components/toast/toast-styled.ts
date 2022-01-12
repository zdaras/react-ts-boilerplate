import styled, { css, keyframes } from 'styled-components';

import { IToast } from '@/store/ducks/toast/toast.types';

interface IToastStyled {
	type: IToast['type'];
}

const fade = keyframes({
	from: {
		opacity: 0,
		transform: 'scale(0.97)'
	},
	to: {
		opacity: 1,
		transform: 'scale(1)'
	}
});

const animationRule = css`
	${fade} 0.5s
`;

export const ToastContainerStyled = styled.div`
	position: fixed;
	z-index: 9;
	right: 2.4rem;
	bottom: 2.4rem;
	max-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const ToastStyled = styled.div<IToastStyled>`
	position: relative;
	display: flex;
	align-items: center;
	transition: all 0.3s ease-in-out;
	animation: ${animationRule};
	z-index: 3;
	word-wrap: break-word;
	width: 430px;
	max-width: 90vw;
	border-radius: 16px;
	overflow: hidden;
	margin-bottom: 0.8rem;
	max-height: 150px;
	cursor: pointer;

	background: ${({ type }) => {
		switch (type) {
			case 'info':
				return '#73c8ff';
			case 'success':
				return '#edf8f0';
			case 'warning':
				return '#ffc107';
			case 'danger':
				return '#f96363d1';
			case 'processing':
				return '#E5F4FF';
			default:
				return '#73c8ff';
		}
	}};
`;

export const ToastIconStyled = styled.div<IToastStyled>`
	width: 45px;
	height: 45px;
	margin-left: 35px;
	border-radius: 30rem;
	display: flex;
	align-items: center;
	justify-content: center;

	path.icon-background {
		fill: transparent;
	}

	path:not(.icon-background) {
		fill: #fff;
	}

	background: ${({ type }) => {
		switch (type) {
			case 'info':
				return '#6ab1e0';
			case 'success':
				return '#26B980';
			case 'warning':
				return '#daa70e';
			case 'danger':
				return '#dc5046';
			case 'processing':
				return '#bfdff7';
			default:
				return '#6ab1e0';
		}
	}};
`;

export const ToastTextStyled = styled.div`
	padding: 20px 22px;
	user-select: none;

	span {
		font-size: 14px;
		font-weight: normal;
		color: ${props => props.theme.DEFAULT_FONT_COLOR};
		opacity: 0.6;
	}
`;

export const ToastTitle = styled.div`
	font-size: 20px;
	padding-bottom: 4px;
	font-weight: normal;
	color: ${props => props.theme.DEFAULT_FONT_COLOR};
`;
