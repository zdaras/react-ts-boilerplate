import { IThemeMode } from '@/styled/themes';
import { Action } from '@/types';

export interface ITopAlert {
	id: number;
	text?: string;
	to?: string;
	type: 'info' | 'success' | 'warning' | 'danger';
	onClose?: () => any;
}

export interface IAppState {
	theme: IThemeMode;
	alerts: ITopAlert[];
}

export interface IThemeSwitchAction extends Action {
	payload: IThemeMode;
}
export interface IShowAlertAction extends Action {
	payload: ITopAlert;
}

export interface IHideAlertAction extends Action {
	payload: ITopAlert;
}
