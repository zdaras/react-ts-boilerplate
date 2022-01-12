import styled, { css } from 'styled-components';

import { responsive } from '@/styled/responsive';

import { ISectionProps } from '.';

export const AccordionContainer = styled.div<{ inBlock?: boolean }>`
	margin-right: ${props => (props.inBlock ? '-15px' : '0')};

	@media ${responsive.sm} {
		margin-right: ${props => (props.inBlock ? '-47px' : '0')};
	}
`;

export const AccordionTitle = styled.div<ISectionProps>`
	padding: 40px 40px 40px 0;

	h4 {
		cursor: pointer;
		user-select: none;
	}
`;

export const AccordionIcon = styled.div<ISectionProps>`
	cursor: pointer;
	padding: 4px;
	position: relative;
`;

export const Line = styled.div<ISectionProps & { second?: boolean }>`
	background-color: #79798e;
	border-radius: 6px;
	width: 17px;
	height: 4px;
	transition: 0.3s;
	cursor: pointer;

	${({ second, expanded }) =>
		second &&
		css`
			position: absolute;
			top: 4px;
			transform: ${expanded ? 'rotate(0deg)' : 'rotate(90deg)'};
		`}
`;

export const AccordionContent = styled.div<ISectionProps>`
	position: relative;
	overflow: hidden;
	transition: max-height 0.3s ease, padding 0.2s;
	max-height: ${props => (props.expanded ? '850px' : '0')};
	padding: 4px 0;

	:not(:last-child) {
		border-bottom: 2px solid #eceef3;
	}

	section {
		transition: all 0.2s;
		opacity: ${props => (props.expanded ? '1' : '0')};
		visibility: ${props => (props.expanded ? 'visible' : 'hidden')};
	}

	${({ withOverflow, expanded }) =>
		withOverflow &&
		expanded &&
		css`
			overflow: visible;
		`}
`;
