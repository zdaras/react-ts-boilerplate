import { Action as ReduxAction, AnyAction } from '@reduxjs/toolkit';
import { FunctionComponent, ReactNode } from 'react';

import { IRootStore } from '@/store/ducks/root-reducer';

interface ThunkDispatch<S, E, A extends ReduxAction> {
	<T extends A>(action: T): T;
	<R>(asyncAction: ThunkAction<R, S, E, A>): R;
}

type ThunkAction<R, S, E, A extends ReduxAction> = (
	dispatch: ThunkDispatch<S, E, A>,
	getState: () => S,
	extraArgument: E
) => R;

export type ThunkA<Return = void, A extends AnyAction = AnyAction> = ThunkAction<Return, IRootStore, undefined, A>;

export interface Action<T = string, P = any> {
	type?: T;
	payload?: P;
}

export type ThenArg<T> = T extends Promise<infer U> ? U : T extends (...args: any[]) => Promise<infer U> ? U : T;

export interface IDropdown {
	id: string;
	name: string;
	code?: string;
	imageUrl?: string;
	[key: string]: any;
}

export type IDropdownArray = IDropdown[];

export interface IPagination {
	startPage: number;
	limit: number;
	[key: string]: any;
}

export interface IOtp {
	otp?: string;
}

export type FC<P = {}> = FunctionComponent<P & { children?: JSX.Element | ReactNode }>;
