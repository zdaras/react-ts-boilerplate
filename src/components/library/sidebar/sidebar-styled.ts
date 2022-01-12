import styled from 'styled-components';

import { responsive } from '@/styled/responsive';
import { NavLink } from '@/components/library/link';

export const SidebarStyled = styled.aside`
	background: ${props => props.theme.SIDEBAR_BG};
	transition: all 0.2s;
	flex: 0 0 300px;
	display: none;
	flex-direction: column;
	box-shadow: 0px 3px 24px #9799c129;
	top: 0;
	position: relative;
	min-height: 100vh;
	height: 100%;
	overflow: hidden;

	@media ${responsive.sm} {
		display: flex;
		width: 300px;
	}

	@media ${responsive.lg} {
		flex: 0 0 350px;
		width: 350px;
	}
`;

export const SidebarInner = styled.div`
	position: fixed;
	width: 100%;
	top: 0;
	height: 100%;

	@media ${responsive.sm} {
		width: 300px;
	}

	@media ${responsive.lg} {
		width: 350px;
	}
`;

export const SidebarTop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 116px;

	@media ${responsive.lg} {
		height: 127px;
	}

	@media ${responsive.xl} {
		height: 150px;
	}
`;

export const SidebarMenu = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;

	@media ${responsive.lg} {
		width: 87%;
	}
`;

export const SidebarMenuItem = styled(NavLink)`
	height: 60px;
	cursor: pointer;
	background-color: transparent;
	border-radius: 0 3rem 3rem 0;
	display: flex;
	align-items: center;
	padding: 0 30px 0 65px;
	transition: all 0.2s ease-in-out;
	color: #79798e;
	font-size: 1rem;
	line-height: 1.375rem;
	margin-bottom: 3px;

	&.active {
		font-weight: 600;
		background-color: #edf8ff;
		color: #1d93f7;
	}

	:hover {
		color: #1d93f7;
	}
`;

export const SidebarIcon = styled.div`
	margin-right: 30px;
	display: inline-flex;
	align-items: center;

	${SidebarMenuItem}:hover & {
		path,
		g {
			fill: #1d93f7;
		}
	}

	${SidebarMenuItem}.active & {
		path,
		g {
			fill: #1d93f7;
		}
	}
`;
