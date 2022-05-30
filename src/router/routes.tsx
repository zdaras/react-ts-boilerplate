import PrivateRoute from '@/components/hoc/private-route';
import UserIsNotAuth from '@/components/hoc/user-is-not-authenticated';
import SkipAuthCheck from '@/components/hoc/skip-auth-check';
import { BlankLayout, MainLayout } from '@/components/layout';
import Login from '@/pages/login/login';
import Register from '@/pages/register/register';
import Dashboard from '@/pages/dashboard/dashboard';
import ForgotPassword from '@/pages/forgot-password/forgot-password';
import PasswordRecovery from '@/pages/password-recovery/password-recovery';
import NotFound from '@/pages/not-found';
import { FC } from '@/types';

export const routes: IRoute[] = [
	{
		path: '/login',
		showInMenu: false,
		Component: Login,
		Layout: BlankLayout,
		AuthCheck: UserIsNotAuth
	},
	{
		path: '/register',
		showInMenu: false,
		Component: Register,
		Layout: BlankLayout,
		AuthCheck: UserIsNotAuth
	},
	{
		path: '/forgot-password',
		showInMenu: false,
		Component: ForgotPassword,
		Layout: BlankLayout,
		AuthCheck: UserIsNotAuth
	},
	{
		path: '/password-recovery',
		showInMenu: false,
		Component: PasswordRecovery,
		Layout: BlankLayout,
		AuthCheck: UserIsNotAuth
	},
	{
		path: '/',
		showInMenu: true,
		Component: Dashboard,
		Layout: MainLayout,
		AuthCheck: SkipAuthCheck
	},
	{
		path: '*',
		Component: NotFound,
		Layout: MainLayout,
		AuthCheck: SkipAuthCheck
	}
];

export const menuList = routes.filter(i => i.showInMenu); // show in sidebar

export interface IRoute {
	path: string;
	name?: string;
	showInMenu?: boolean;
	Component: FC;
	Layout: FC;
	AuthCheck: FC;
}
