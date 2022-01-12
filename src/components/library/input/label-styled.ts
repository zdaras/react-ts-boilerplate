import styled from 'styled-components';

import { IProps } from '.';

export const LabelStyled = styled.label<IProps>`
	flex: 1 1 auto;
	outline: none;
	position: relative;
	display: flex;
	align-items: center;

	& > label.input-label:not([input-type='checkbox']):not([input-type='radio']) {
		color: #dbdbe6;
		position: absolute;
		left: 25px;
		top: 50%;
		padding: 0px 5px;
		margin-top: -8px;
		background-color: ${({ theme }) => theme.INPUT_LABEL_BG_COLOR};
		font-family: ${({ theme }) => theme.INPUT_FONT};
		font-size: ${({ theme }) => theme.INPUT_FONT_SIZE};
		line-height: ${({ theme }) => theme.INPUT_LINE_HEIGHT};
		transition: all 0.2s ease;
		pointer-events: none;
		width: 70%;
	}

	&[type='checkbox'] {
		width: auto;
		height: 29px;
		flex: 0 1 auto;
	}

	& > label.input-label[input-type='checkbox'],
	& > label.input-label[input-type='radio'] {
		font-size: ${({ theme }) => theme.DEFAULT_FONT_SIZE};
		color: ${({ theme }) => theme.INPUT_PLACEHOLDER_COLOR};
		cursor: pointer;
		margin-left: 20px;
	}

	.switcher {
		width: 50px;
		height: 20px;
		background: #efeff8;
		padding: 0;
		position: relative;
		display: block;
		cursor: pointer;
		border-radius: 100px;
		transition: box-shadow 0.2s ease-out 0.02s, border-color 0.2s ease-out;

		&:after {
			background: #c2c2cc;
			position: absolute;
			top: -6px;
			left: 0;
			content: '';
			transform: translateX(0);
			transition: all 0.2s ease-out;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
			border-radius: 100px;
			height: 29px;
			width: 29px;
		}
	}

	input:checked {
		& + .switcher {
			background-color: #edf8ff;
			&::after {
				background-color: #2590f7;
				left: 22px;
			}
		}
	}

	.smallSwitcher {
		width: 33px;
		height: 16px;
		background: #efeff8;
		padding: 0;
		position: relative;
		display: block;
		cursor: pointer;
		border-radius: 100px;
		transition: box-shadow 0.2s ease-out 0.02s, border-color 0.2s ease-out;

		&:after {
			background: #c2c2cc;
			position: absolute;
			top: -3px;
			left: 0;
			content: '';
			transform: translateX(0);
			transition: all 0.2s ease-out;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
			border-radius: 100px;
			height: 20px;
			width: 20px;
		}
	}

	input:checked {
		& + .smallSwitcher {
			background-color: #edf8ff;
			&::after {
				background-color: #2590f7;
				left: 14px;
			}
		}
	}

	&[type='checkbox'][disabled] > input,
	&[type='checkbox'][disabled] > label,
	&[type='checkbox'][disabled] > .switcher,
	&[type='checkbox'][disabled] > .smallSwitcher {
		opacity: 0.5;
		cursor: not-allowed !important;
	}
`;
