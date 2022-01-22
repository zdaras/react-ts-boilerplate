import React, { FC } from 'react';
import { RouteProps } from 'react-router';
import loadable from '@loadable/component';

import { userIsNotAuthenticatedRedir } from '@/components/hoc/auth';
import { BlankLayout, MainLayout } from '@/components/layout';
import Login from '@/pages/login';
import Register from '@/pages/register';
import Dashboard from '@/pages/dashboard';

export const AsyncPage: any = loadable(
	(props: IAsyncPageProps): any => import(/* webpackPrefetch: true */ `@/pages/${props.page}`)
);

export const routes: IRoute[] = [
	{
		path: '/login',
		showInMenu: false,
		Component: userIsNotAuthenticatedRedir(Login),
		Layout: BlankLayout
	},
	{
		path: '/register',
		showInMenu: false,
		Component: userIsNotAuthenticatedRedir(Register),
		Layout: BlankLayout
	},
	{
		path: '/forgot-password',
		showInMenu: false,
		Component: (props: RouteProps) => <AsyncPage page="forgot-password" {...props} />,
		Layout: BlankLayout
	},
	{
		path: '/password-recovery',
		showInMenu: false,
		Component: (props: RouteProps) => <AsyncPage page="password-recovery" {...props} />,
		Layout: BlankLayout
	},
	{
		path: '/',
		name: 'Dashboard',
		showInMenu: true,
		Component: Dashboard,
		Layout: MainLayout
	}
];

export const router = [{ routes }];

export const sidebarMenuList = routes.filter(i => i.showInMenu); // show in sidebar

interface IAsyncPageProps {
	page: string;
}

export interface IRoute {
	path: string;
	name?: string;
	showInMenu: boolean;
	Component: any;
	Layout: FC;
}
