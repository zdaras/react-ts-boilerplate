import styled, { css } from 'styled-components';

import { IProps } from '.';

export const InputStyled = styled.input<IProps>`
	border-radius: ${({ theme }) => theme.INPUT_BORDER_RADIUS};
	border: 1px solid ${({ theme }) => theme.INPUT_BORDER_COLOR};
	height: ${({ theme }) => theme.INPUT_HEIGHT};
	width: 100%;
	outline: none;
	transition: all 0.3s ease;
	padding: 0 28px;
	font-family: ${({ theme }) => theme.INPUT_FONT};
	font-size: ${({ theme }) => theme.INPUT_FONT_SIZE};
	line-height: ${({ theme }) => theme.INPUT_LINE_HEIGHT};
	box-shadow: none;

	&[disabled] {
		background-color: transparent;
	}

	${({ AbsoluteComp }) =>
		AbsoluteComp &&
		css`
			 {
				padding-right: 5rem;
			}
		`}

	:focus {
		border-color: ${({ theme }) => theme.INPUT_BORDER_COLOR_FOCUSED};

		~ span svg.calendar-icon path {
			fill: ${({ theme }) => theme.INPUT_BORDER_COLOR_FOCUSED};
		}
	}

	&:focus ~ label.input-label:not([input-type='checkbox']):not([input-type='radio']),
	&:not(:placeholder-shown) ~ label.input-label:not([input-type='checkbox']):not([input-type='radio']) {
		top: 0;
		color: ${({ theme }) => theme.INPUT_LABEL_COLOR};
		font-size: 0.75rem;
		left: 26px;
		width: auto;
	}

	:-webkit-autofill ~ label.input-label:not([input-type='checkbox']):not([input-type='radio']) {
		top: 0;
		color: ${({ theme }) => theme.INPUT_LABEL_COLOR};
		font-size: 0.75rem;
		left: 26px;
		width: auto;
	}

	&:focus ~ label.input-label:not([input-type='checkbox']):not([input-type='radio']) {
		color: ${({ theme }) => theme.INPUT_BORDER_COLOR_FOCUSED};
	}

	&[type='checkbox'],
	&[type='radio'] {
		width: 29px;
		height: 29px;
		display: inline-block;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-image: url('../../assets/icons/checkIcon.svg');
		background-size: 0;
		padding: 0;
		border: 2px solid;
		border-color: ${({ theme }) => theme.INPUT_BORDER_COLOR};
		border-radius: 100%;
		background-position: center;
		cursor: pointer;
		transition: border-color 0.1s, background-color 0.2s, border-image 0s;

		${({ uncheck }) =>
			uncheck &&
			css`
				 {
					background-image: url('../../assets/icons/uncheck.svg');
				}
			`}

		:checked {
			background-size: 29px;
			background-repeat: no-repeat;
			border: 2px solid;
			border-color: ${props => props.theme.BTN_BG_COLOR};
			background-color: ${props => props.theme.BTN_BG_COLOR};
		}
	}

	${({ switcher, smallSwitcher }) =>
		(switcher || smallSwitcher) &&
		css`
			 {
				display: none !important;
			}
		`}

	${({ inputType }) => {
		switch (inputType) {
			case 'filter':
				return css`
					 {
						height: 47px;
					}
				`;
			default:
				return css`
					 {
						height: ${({ theme }) => theme.INPUT_HEIGHT};
					}
				`;
		}
	}}

	${({ errorText, theme }) =>
		errorText &&
		css`
			 {
				border-color: ${theme.INPUT_ERROR_BORDER_COLOR} !important;
				/* background-color: ${theme.INPUT_ERROR_BACKGROUND_COLOR}; */

				&:not(:placeholder-shown) ~ label.input-label:not([input-type='checkbox']):not([input-type='radio']),
				&:focus ~ label.input-label:not([input-type='checkbox']):not([input-type='radio']) {
					color: ${theme.INPUT_ERROR_BORDER_COLOR};
				}
			}
		`}

		${({ type }) =>
		type === 'password' &&
		css`
			 {
				letter-spacing: 2px;
			}
		`}

		${({ success }) =>
		success &&
		css`
			 {
				opacity: 0.6;
			}
		`}
`;

export const AbsoluteCompStyled = styled.span`
	padding: 3px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 24px;
	top: 0;
	height: 100%;
	font-size: ${({ theme }) => theme.INPUT_FONT_SIZE};

	span {
		font-size: ${({ theme }) => theme.INPUT_FONT_SIZE};
	}

	:hover {
		svg.close-icon path {
			fill: rgb(121, 121, 142);
		}
	}
`;

export const RangeTrack = styled.div`
	height: 5px;
	width: 100%;
	border-radius: 6px;
	background-color: #edf8ff;
	align-self: 'center';
`;

export const RangeLabel = styled.div`
	position: absolute;
	color: #79798e;
	font-weight: 600;
	font-size: 12px;
	letter-spacing: 0.2px;
	padding: 12px 14px;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0 1px 4px #92929261;
	bottom: 26px;
	width: max-content;
	outline: none;
	opacity: 0;
	transition: all 0.15s;

	:hover {
		opacity: 1;
	}

	::after {
		content: '';
		position: absolute;
		left: 46%;
		bottom: -5px;
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 5px solid #fff;
		clear: both;
	}
`;

export const RangeThumb = styled.div`
	height: 15px;
	width: 15px;
	border-radius: 15rem;
	background-color: #1d93f7;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
`;

export const RangeContainer = styled.div`
	width: 100%;
	padding: 28px 6px 32px;

	:hover ${RangeLabel} {
		opacity: 1;
	}
`;

export const RangeLabels = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 13px 0 0;
`;

export const RangeBottomLabel = styled.div`
	color: #cfcfe0;
	font-size: 12px;
	line-height: 14px;
	letter-spacing: 0.3px;
`;

export const CodeInputContainer = styled.div`
	width: 100%;
`;
