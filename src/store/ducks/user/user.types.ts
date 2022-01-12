import { Action } from '@/types';
import { IUser } from '@/types/models/user';
import { IUpdateUserInfoParams } from '@/services/api/user/types';

export interface IUserState {
	userInfo: IUser | null;
	loading: boolean;
	isLoggedIn: boolean;
	error?: boolean;
}

export interface ILoginSuccessAction extends Action {
	payload: IUser;
}

export interface IUpdateInfoAction extends Action {
	payload: IUpdateUserInfoParams;
}
