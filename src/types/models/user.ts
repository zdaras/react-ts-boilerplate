import * as ts from 'io-ts';

export const ILoginValidator = ts.type({
	access_token: ts.string,
	expires_in: ts.number,
	refresh_expires_in: ts.number,
	refresh_token: ts.string,
	token_type: ts.string,
	'not-before-policy': ts.number,
	session_state: ts.string,
	scope: ts.string
});

export type ILoginResponse = ts.TypeOf<typeof ILoginValidator>;

export const IUserValidator = ts.type({
	id: ts.string,
	emailVerified: ts.union([ts.boolean, ts.undefined]),
	username: ts.string,
	hasTwoFa: ts.boolean,
	hasTwoFaOnLogin: ts.boolean,
	fname: ts.union([ts.string, ts.null]),
	lname: ts.union([ts.string, ts.null])
});

export type IUser = ts.TypeOf<typeof IUserValidator>;

export const IRegisterValidator = ts.string;

export type IRegister = ts.TypeOf<typeof IRegisterValidator>;
