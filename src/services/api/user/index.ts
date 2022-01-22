import { ILoginValidator, IUserValidator, IRegisterValidator } from '@/types/models/user';
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
	login: (params: ILoginParams) => post('auth/login', params).then(decode(ILoginValidator)),
	register: (params: IRegisterParams) => post('auth/register', params).then(decode(IRegisterValidator)),
	currentUser: (token: string) =>
		post('auth/user-info', null, { headers: { [authToken]: `Bearer ${token}` } }).then(decode(IUserValidator)),
	changePassword: (params: IChangePasswordParams) => post('auth/password-change', params).then(({ data }) => data),
	resendEmail: (params: IResendEmailParams) => post('auth/resend-email', null, { params }).then(({ data }) => data),
	updateUserInfo: (params: IUpdateUserInfoParams) => post('auth/update-info', params).then(({ data }) => data),
	sendRecoveryEmail: (params: ISendRecoveryEmailParams) =>
		post('auth/password-recover-email', null, { params }).then(({ data }) => data),
	recoverPassword: (params: IRecoverPasswordParams) => post('auth/password-recover', params).then(({ data }) => data),
	logout: (params: ILogoutParams) => post('auth/logout', null, { params }).then(({ data }) => data)
};
