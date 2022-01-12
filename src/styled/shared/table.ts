import styled, { css } from 'styled-components';

import { responsive } from '@/styled/responsive';
import { IDataGrid } from '@/types/table';

export const TableComp = styled.table<IDataGrid>`
	width: 100%;
	display: block;
	border-spacing: 0;
	border-collapse: collapse;
	overflow: hidden;

	@media ${responsive.sm} {
		width: 100%;
		display: table;
	}

	tr {
		${props =>
			props.withIcon &&
			css`
				td:first-child {
					border-bottom: 0;
					width: 114px;
				}
			`};

		td:nth-last-child(-n + 2) {
			text-align: right;
		}

		td:last-child {
			color: #79798e;
			padding-right: ${props => props.theme.BLOCK_PADDING_XS};

			@media ${responsive.sm} {
				padding-right: ${props => props.theme.BLOCK_PADDING_SM};
			}
		}

		td:first-child {
			padding-left: ${props => props.theme.BLOCK_PADDING_XS};

			@media ${responsive.sm} {
				padding-left: ${props => props.theme.BLOCK_PADDING_SM};
			}
		}

		:last-child {
			td {
				border-bottom: 0;
			}
		}

		td:not(:first-child):not(:last-child) {
			padding: 10px;
		}
	}

	thead tr td {
		height: 25px;
		padding: 2px 0;
		color: #c1c1d5;
		font-size: 14px;
		border-bottom: 0;
	}

	img {
		width: 38px;
		height: 38px;
	}

	tbody tr {
		:not(:first-child) {
			border-top: 1px solid #ededf7;
		}
	}

	${props =>
		props.hoverable &&
		props.scale &&
		css`
			cursor: pointer;

			tbody tr:hover {
				transform: scale(1.007);
				background-color: #7073af09;
				border-top-color: transparent;

				& + tr {
					border-top-color: transparent;
				}
			}
		`};

	${props =>
		props.hoverable &&
		!props.scale &&
		css`
			cursor: pointer;

			tbody tr:hover {
				background-color: #7073af09;
				border-top-color: transparent;

				& + tr {
					border-top-color: transparent;
				}
			}
		`};

	${props =>
		props.margin &&
		css`
			margin: ${props.margin};
		`};

	${props =>
		props.padding &&
		css`
			padding: ${props.padding};
		`};
`;

export const TableContainer = styled.div<{ overflow?: string }>`
	overflow: ${props => props.overflow || 'hidden'};
	position: relative;
	flex: 1 1 100%;
	margin-left: ${props => props.theme.TABLE_CONTAINER_MARGIN_XS};
	margin-right: ${props => props.theme.TABLE_CONTAINER_MARGIN_XS};
	overflow-x: ${props => (props.overflow ? 'unset' : 'auto')};

	table {
		overflow: ${props => props.overflow || 'hidden'};
	}

	::-webkit-scrollbar {
		width: 4px;
		height: 5px;
		background-color: #d9d9eb;
	}

	@media ${responsive.sm} {
		margin-left: ${props => props.theme.TABLE_CONTAINER_MARGIN_SM};
		margin-right: ${props => props.theme.TABLE_CONTAINER_MARGIN_SM};
	}
`;
