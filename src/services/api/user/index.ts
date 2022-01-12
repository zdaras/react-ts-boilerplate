import {
	ILoginValidator,
	ILoginResponse,
	IUser,
	IUserValidator,
	IRegisterValidator,
	IRegister
} from '@/types/models/user';
import { decode } from '@/utils/io-ts';

import { post, authToken } from '../axios';
import {
	ILoginParams,
	IRegisterParams,
	IChangePasswordParams,
	IResendEmailParams,
	IUpdateUserInfoParams,
	ISendRecoveryEmailParams,
	IRecoverPasswordParams,
	ILogoutParams
} from './types';

export default {
	login: (params: ILoginParams) =>
		post<ILoginResponse>('auth/login', params).then(({ data }) => decode<ILoginResponse>(ILoginValidator, data)),
	register: (params: IRegisterParams) =>
		post<IRegister>('auth/register', params).then(({ data }) => decode<IRegister>(IRegisterValidator, data)),
	currentUser: (token: string) =>
		post<IUser>('auth/user-info', null, { headers: { [authToken]: `Bearer ${token}` } }).then(({ data }) =>
			decode<IUser>(IUserValidator, data)
		),
	changePassword: (params: IChangePasswordParams) => post('auth/password-change', params).then(({ data }) => data),
	resendEmail: (params: IResendEmailParams) => post('auth/resend-email', null, { params }).then(({ data }) => data),
	updateUserInfo: (params: IUpdateUserInfoParams) => post('auth/update-info', params).then(({ data }) => data),
	sendRecoveryEmail: (params: ISendRecoveryEmailParams) =>
		post('auth/password-recover-email', null, { params }).then(({ data }) => data),
	recoverPassword: (params: IRecoverPasswordParams) => post('auth/password-recover', params).then(({ data }) => data),
	logout: (params: ILogoutParams) => post('auth/logout', null, { params }).then(({ data }) => data)
};
