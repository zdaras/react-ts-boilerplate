import styled, { css, keyframes } from 'styled-components';

import { IProps } from './index';

const buttonLoader = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const animationRule = css`
	${buttonLoader} 0.6s linear infinite
`;

export const ButtonStyled = styled.button<IProps>`
	position: relative;
	width: ${props => (props.inline ? 'auto' : '100%')};
	border: 0px;
	border-radius: ${props => props.theme.BTN_BORDER_RADIUS};
	box-shadow: none;
	outline: none;
	transition: all 0.2s ease-in-out;
	font-size: 1rem;
	line-height: 1.225rem;
	letter-spacing: 0.4px;
	display: ${props => (props.inline ? 'inline-flex' : 'flex')};
	align-items: center;
	justify-content: center;
	font-family: ${props => props.theme.DEFAULT_FONT};
	font-size: ${props => props.theme.DEFAULT_FONT_SIZE};

	svg {
		margin-right: 12px;

		path.icon-background {
			fill: transparent !important;
		}
	}

	svg,
	path,
	circle {
		transition: all 0.2s ease-in-out;
	}

	${({ theme, active }) =>
		active &&
		css`
			background: ${theme.BTN_BG_COLOR_ACTIVE};
		`}

	${({ circle }) =>
		circle &&
		css`
			width: 46px;
			height: 46px !important;

			svg {
				margin: 0;
			}
		`}

	${({ disabled }) =>
		disabled &&
		css`
			cursor: not-allowed;
			opacity: 0.4;
		`}

	${({ loading, buttonType, theme }) =>
		loading &&
		css`
			pointer-events: none;
			color: transparent !important;
			opacity: 0.8;

			::after {
				position: absolute;
				content: '';
				top: 50%;
				left: 50%;
				margin: -0.64285714em 0 0 -0.64285714em;
				width: 1.2rem;
				height: 1.2rem;
				border-radius: 500rem;
				border-top: ${buttonType !== 'text' ? `2px solid ${theme.BTN_COLOR}` : `2px solid ${theme.BTN_BG_COLOR}`};
				border-right: 2px solid transparent;
				animation: ${animationRule};
			}
		`}


	${({ buttonType }) => {
		switch (buttonType) {
			case 'normal':
				return css`
					 {
						height: 54px;
						padding: ${(props: IProps) => (props.circle ? '10px 13px' : '10px 44px')};
						background-color: ${({ theme }) => theme.BTN_NORMAL_BG_COLOR};
						color: ${({ theme }) => theme.BTN_NORMAL_COLOR};

						path:not(.icon-background) {
							fill: ${({ theme }) => theme.BTN_NORMAL_COLOR};
						}

						:hover {
							background-color: ${({ theme }) => theme.BTN_NORMAL_BG_COLOR_ACTIVE};
							color: ${({ theme }) => theme.BTN_NORMAL_COLOR_ACTIVE};

							path:not(.icon-background) {
								fill: ${({ theme }) => theme.BTN_NORMAL_COLOR_ACTIVE};
							}
						}
					}
				`;
			case 'medium':
				return css`
					 {
						height: 47px;
						padding: ${(props: IProps) => (props.circle ? '10px 15px' : '10px 32px')};
						background-color: ${({ theme }) => theme.BTN_NORMAL_BG_COLOR};
						color: ${({ theme }) => theme.BTN_NORMAL_COLOR};

						path:not(.icon-background) {
							fill: ${({ theme }) => theme.BTN_NORMAL_COLOR};
						}

						:hover {
							background-color: ${({ theme }) => theme.BTN_NORMAL_BG_COLOR_ACTIVE};
							color: ${({ theme }) => theme.BTN_NORMAL_COLOR_ACTIVE};

							path:not(.icon-background) {
								fill: ${({ theme }) => theme.BTN_NORMAL_COLOR_ACTIVE};
							}
						}
					}
				`;
			case 'outline':
				return css`
					 {
						height: 47px;
						padding: ${(props: IProps) => (props.circle ? '10px 15px' : '10px 32px')};
						background-color: transparent;
						color: #1d93f7db;
						border: 1px solid #1d93f77d;

						path:not(.icon-background) {
							fill: ${({ theme }) => theme.BTN_NORMAL_COLOR};
						}

						:hover {
							background-color: #edf8ff;
							border-color: #edf8ff;

							path:not(.icon-background) {
								fill: ${({ theme }) => theme.BTN_NORMAL_COLOR_ACTIVE};
							}
						}
					}
				`;
			case 'primary':
				return css`
					 {
						height: 47px;
						padding: ${(props: IProps) => (props.circle ? '10px 13px' : '10px 44px')};
						background-color: ${({ theme }) => theme.BTN_BG_COLOR};
						color: ${({ theme }) => theme.BTN_COLOR};

						path:not(.icon-background) {
							fill: ${({ theme }) => theme.BTN_COLOR};
						}

						:hover {
							background-color: ${({ theme }) => theme.BTN_BG_COLOR_ACTIVE};
						}
					}
				`;
			case 'text':
				return css`
					 {
						height: ${(props: IProps) => props.height || 'auto'};
						padding: ${(props: IProps) => (props.circle ? '10px 13px' : props.padding || '10px 44px')};
						background: transparent;
						color: ${({ theme }) => theme.BTN_NORMAL_COLOR};

						path:not(.icon-background) {
							fill: ${({ theme }) => theme.BTN_NORMAL_COLOR};
						}
					}
				`;
			case 'circle':
				return css`
					 {
						height: 30px;
						width: 30px;
						padding: 0px;
						background-color: ${({ theme }) => theme.BTN_NORMAL_BG_COLOR};
						color: ${({ theme }) => theme.BTN_NORMAL_COLOR};

						path:not(.icon-background) {
							fill: ${({ theme }) => theme.BTN_NORMAL_COLOR};
						}

						:hover {
							background-color: ${({ theme }) => theme.BTN_NORMAL_BG_COLOR_ACTIVE};
							color: ${({ theme }) => theme.BTN_NORMAL_COLOR_ACTIVE};

							path:not(.icon-background) {
								fill: ${({ theme }) => theme.BTN_NORMAL_COLOR_ACTIVE};
							}
						}
					}
				`;
			default:
				return css`
					 {
						height: 54px;
						padding: ${(props: IProps) => (props.circle ? '10px 13px' : props.padding || '10px 44px')};
						background-color: ${({ theme }) => theme.BTN_BG_COLOR};
						color: ${({ theme }) => theme.BTN_COLOR};

						path:not(.icon-background) {
							fill: ${({ theme }) => theme.BTN_COLOR};
						}

						:hover {
							background-color: ${({ theme }) => theme.BTN_BG_COLOR_ACTIVE};
						}
					}
				`;
		}
	}}
`;

export const ButtonText = styled.span<{ fontSize?: string }>`
	font-size: ${props => props.fontSize || 'inherit'};
	font-weight: 600;
`;
