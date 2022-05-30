import styled from 'styled-components';

import { responsive } from '@/styled/responsive';

export const TabMenu = styled.ul`
	list-style: none;
	padding: 0;
	margin-bottom: 0;
	-webkit-margin-before: 0;
	-webkit-margin-after: 0;
	-webkit-margin-start: 0px;
	-webkit-margin-end: 0px;
	-webkit-padding-start: 0px;

	li {
		display: block;
		margin-left: 0;
		padding: 10px 0;
		font-size: 20px;
		transition: all 0.3s;
		cursor: pointer;
		color: ${({ theme }) => theme.DEFAULT_FONT_COLOR};
		text-align: center;
		position: relative;

		@media ${responsive.md} {
			padding: 10px 80px 10px 0;
			display: inline-block;
			text-align: left;
		}

		&::before {
			content: '';
			position: absolute;
			bottom: -3px;
			width: 32px;
			height: 0px;
			background: transparent;
			border-radius: 40px;
			transition: all 0.3s ease;
		}

		&.selected {
			color: ${({ theme }) => theme.DEFAULT_FONT_COLOR_ACTIVE};

			&:before {
				height: 3px;
				background: ${({ theme }) => theme.DEFAULT_FONT_COLOR_ACTIVE};
			}
		}
	}
`;
