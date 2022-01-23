import * as ts from 'io-ts';

export const LoginSchema = ts.type({
	access_token: ts.string,
	expires_in: ts.number,
	refresh_expires_in: ts.number,
	refresh_token: ts.string
});

export type ILoginResponse = ts.TypeOf<typeof LoginSchema>;

export const UserSchema = ts.type({
	id: ts.string,
	emailVerified: ts.union([ts.boolean, ts.undefined]),
	username: ts.string,
	hasTwoFa: ts.boolean,
	hasTwoFaOnLogin: ts.boolean,
	fname: ts.union([ts.string, ts.null]),
	lname: ts.union([ts.string, ts.null])
});

export type IUser = ts.TypeOf<typeof UserSchema>;

export const RegisterSchema = ts.string;

export type IRegister = ts.TypeOf<typeof RegisterSchema>;
