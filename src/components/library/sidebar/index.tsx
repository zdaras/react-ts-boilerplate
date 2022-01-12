import React from 'react';
import { useTranslation } from 'react-i18next';

import { userIsAuthenticated } from '@/components/hoc/auth';

import { SidebarStyled, SidebarMenu, SidebarMenuItem, SidebarInner } from './sidebar-styled';

export const Sidebar = () => {
	const { t } = useTranslation();

	return (
		<SidebarStyled>
			<SidebarInner>
				<SidebarMenu>
					<SidebarMenuItem to="/">{t('Home')}</SidebarMenuItem>
				</SidebarMenu>
			</SidebarInner>
		</SidebarStyled>
	);
};

export default userIsAuthenticated(Sidebar);
