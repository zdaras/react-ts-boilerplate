import { IOtp } from '@/types';

export interface ILoginParams extends IOtp {
	username: string;
	password: string;
	trustDevice?: boolean;
}

export interface IRegisterParams {
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	confirmPassword?: string;
	termsAccepted?: boolean;
	subscribe?: boolean;
}

export interface IChangePasswordParams extends IOtp {
	newPassword: string;
	oldPassword?: string;
	confirmPassword?: string;
}

export interface IResendEmailParams {
	userId?: string;
}

export interface IUpdateUserInfoParams {
	fname?: string;
	lname?: string;
}

export interface ISendRecoveryEmailParams {
	username?: string;
}

export interface IRecoverPasswordParams {
	key?: string;
	password?: string;
	verifiedPassword?: string;
}

export interface ILogoutParams {
	refresh_token?: string;
}
