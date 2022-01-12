import styled, { css } from 'styled-components';

import { responsive } from '@/styled/responsive';

export const WrapperStyled = styled.section`
	min-height: calc(100% - 114px); // header height
	transition: all 0.2s;
	flex: 1 1 auto;
	position: relative;
`;

export const RouteWrapperStyled = styled.div`
	height: 100%;
	position: relative;
	padding: 0 15px;

	@media ${responsive.sm} {
		padding: 0 44px;
	}
`;

export const Container = styled.div<{ maxWidth?: string }>`
	padding: 0 10px;

	@media ${responsive.md} {
		padding: 0 5%;
	}

	@media ${responsive.lg} {
		padding: 0 10%;
	}

	@media ${responsive.xl} {
		padding: 0 14.5%;
	}

	${({ maxWidth }) =>
		maxWidth &&
		css`
			max-width: ${maxWidth};
		`}
`;

export const TopPanelStyled = styled.div`
	height: 116px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px 0;

	@media ${responsive.sm} {
		padding: 44px 0;
	}

	@media ${responsive.lg} {
		height: 127px;
	}

	@media ${responsive.xl} {
		height: 150px;
	}
`;

export const TopLeftStyled = styled.div`
	flex: 1 1 auto;
`;

export const TopRightStyled = styled.div`
	flex: 0 1 auto;
`;

export const BlockStyled = styled.div<IBlockStyled>`
	box-shadow: none;
	background: ${props => props.theme.BLOCK_BG};
	position: relative;
	height: ${props => props.height || '100%'};
	padding: ${props => props.padding || props.theme.BLOCK_PADDING_XS};
	border-radius: 1rem;

	&.transaction-block {
		overflow: hidden;
	}

	@media ${responsive.sm} {
		padding: ${props => props.padding || props.theme.BLOCK_PADDING_SM};
		box-shadow: ${props => props.shadow || '0px 3px 24px #9799c129'};
	}

	${({ formPadding }) =>
		formPadding &&
		css`
			@media ${responsive.sm} {
				padding: 60px 86px;
			}

			padding: 30px;
		`}
`;

export const H1 = styled.h1<IH>`
	font-size: 1.5rem;
	line-height: 2.6rem;
	letter-spacing: 0.3px;
	margin: 0.67em 0;

	@media ${responsive.sm} {
		font-size: 2.5rem;
	}

	${({ margin }) =>
		margin &&
		css`
			margin: ${margin};
		`}

	${({ align }) =>
		align &&
		css`
			text-align: ${align};
		`}

	${({ weight }) =>
		weight &&
		css`
			font-weight: ${weight};
		`}
`;

export const H2 = styled.h2<IH>`
	font-size: 1.25rem;
	line-height: 2.6875rem;
	letter-spacing: 0.8px;
	font-weight: 600;
	font-family: ${props => props.theme.DEFAULT_FONT};

	@media ${responsive.sm} {
		font-size: 2.25rem;
	}

	${({ margin }) =>
		margin &&
		css`
			margin: ${margin};
		`}

	${({ align }) =>
		align &&
		css`
			text-align: ${align};
		`};
`;

export const H3 = styled.h3<IH>`
	letter-spacing: 0.4px;
	font-size: 1.25rem;
	line-height: 1.4rem;
	margin-bottom: 6px;
	font-weight: ${props => props.weight || '600'};

	@media ${responsive.sm} {
		font-size: 1.625rem;
		line-height: 1.875rem;
	}

	${({ padding }) =>
		padding &&
		css`
			padding: ${padding};
		`}

	${({ align }) =>
		align &&
		css`
			text-align: ${align};
		`};
`;

export const H4 = styled.h4<IH>`
	font-size: 1.25rem;
	line-height: 1.5rem;
	letter-spacing: 0.2px;
	font-weight: 600;

	${({ padding }) =>
		padding &&
		css`
			padding: ${padding};
		`}

	${({ align }) =>
		align &&
		css`
			text-align: ${align};
		`}
		
	${({ weight }) =>
		weight &&
		css`
			font-weight: ${weight};
		`}
`;

export const H5 = styled.h5<IH>`
	font-size: 1rem;
	line-height: 1.125rem;
	letter-spacing: 0.16px;
	font-weight: 600;
	color: ${props => props.theme.SECONDARY_FONT_COLOR};
	opacity: ${props => props.opacity || '0.6'};

	${({ padding }) =>
		padding &&
		css`
			padding: ${padding};
		`}

	${({ align }) =>
		align &&
		css`
			text-align: ${align};
		`}
`;

export const H6 = styled.h6<IH>`
	font-size: 0.875rem;
	line-height: 1rem;
	letter-spacing: 0.3px;
	color: ${props => props.theme.SECONDARY_FONT_COLOR};
	font-weight: normal;
	opacity: ${props => props.opacity || '0.7'};
	transition: 0.3s;

	${({ padding }) =>
		padding &&
		css`
			padding: ${padding};
		`}

	${({ align }) =>
		align &&
		css`
			text-align: ${align};
		`}
`;

export const TableIcon = styled.div<{ padding?: string }>`
	padding: ${props => props.padding || 0};
	display: inline-block;
	cursor: pointer;

	path.second-path {
		transition: 0.2s;
		font-weight: normal;
		fill: #1d93f7;
	}

	svg.custom {
		transition: 0.2s;
		fill: #a2a2b1;
	}

	svg.normal,
	svg.normal path {
		fill: #1d93f7;
	}

	:hover {
		svg.custom {
			fill: #1d93f7;
		}
	}
`;

export const AbsoluteInputIcon = styled.span`
	padding: 3px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 18px;
	top: 25%;

	path.second-path {
		transition: 0.2s;
		font-weight: normal;
		fill: #a6a6c3;
	}

	:hover {
		path.second-path {
			fill: #79798e;
		}
	}
`;

export const TextEllipsis = styled.div<{ maxWidth?: string }>`
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	max-width: ${props => props.maxWidth || '100%'};

	@media ${responsive.lg} {
		max-width: 100%;
	}
`;

export const Message = styled.div`
	text-align: center;
	width: 100%;
	padding: 15px;
	border: 1px solid #00968836;
	border-radius: 2px;
	font-size: 15px;
	line-height: 19px;
	letter-spacing: 0.2px;
	background-color: #00968821;
`;

export const NotFoundWrapperStyled = styled.div`
	text-align: center;

	h5 {
		font-size: 20px;
		color: ${({ theme }) => theme.SECONDARY_FONT_COLOR};
		font-weight: 400;
	}

	button {
		font-size: 20px;
	}
`;

interface IBlockStyled {
	padding?: string;
	shadow?: string;
	formPadding?: boolean;
	height?: string;
}

interface IH {
	padding?: string;
	margin?: string;
	align?: 'left' | 'center' | 'right';
	weight?: string | number;
	opacity?: string;
}
