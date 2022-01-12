import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import loadable from '@loadable/component';

import { isAuthRedir, userIsNotAuthenticatedRedir } from '@/components/hoc/auth';
import { BlankLayout, MainLayout } from '@/components/layout';
import Login from '@/pages/login';
import Register from '@/pages/register';
import PasswordRecovery from '@/pages/password-recovery';
import Dashboard from '@/pages/dashboard';

export const AsyncPage: any = loadable(
	(props: IAsyncPageProps): any => import(/* webpackPrefetch: true */ `@/pages/${props.page}`)
);

export const routes: IRoute[] = [
	{
		path: '/login',
		exact: false,
		showInMenu: false,
		component: userIsNotAuthenticatedRedir(Login),
		Layout: BlankLayout
	},
	{
		path: '/register',
		exact: false,
		showInMenu: false,
		component: userIsNotAuthenticatedRedir(Register),
		Layout: BlankLayout
	},
	{
		path: '/forgot-password',
		exact: false,
		showInMenu: false,
		component: (props: RouteComponentProps) => <AsyncPage page="forgot-password" {...props} />,
		Layout: BlankLayout
	},
	{
		path: '/password-recovery',
		exact: false,
		showInMenu: false,
		component: userIsNotAuthenticatedRedir(PasswordRecovery),
		Layout: BlankLayout
	},
	{
		path: '/',
		exact: false,
		showInMenu: false,
		component: isAuthRedir(Dashboard),
		Layout: MainLayout
	}
];

export const router = [{ routes }];

interface IAsyncPageProps {
	page: string;
}

export interface IRoute {
	path?: string;
	exact?: boolean;
	showInMenu: boolean;
	component: any;
	Layout: FC;
}
