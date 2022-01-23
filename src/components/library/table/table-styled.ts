import styled, { css } from 'styled-components';

import { IProps } from './cell';

export const TD = styled.td<IProps>`
	display: table-cell;
	text-align: ${({ align }) => (align ? `${align} !important` : 'unset')};
	width: ${({ width }) => (width ? `${width} !important` : 'auto')};
	color: ${({ secondary, theme }) => (secondary ? theme.TABLE_SECONDARY_COLOR : theme.TABLE_COLOR)};
	white-space: nowrap;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	height: 60px;
`;

export const TR = styled.tr<{ dark?: boolean; actionsHover?: boolean }>`
	transition: 0.2s ease-in-out;

	${({ dark }) =>
		dark &&
		css`
			td a {
				opacity: 0.5;
			}
		`}

	${({ actionsHover }) =>
		actionsHover &&
		css`
			:hover {
				.trans-amount-wrapper {
					right: 94px;
				}

				.trans-actions {
					opacity: 1;
					visibility: visible;
				}
			}
		`}
`;
