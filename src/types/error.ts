import * as ts from 'io-ts';

export const IErrorValidator = ts.type({
	errorCode: ts.union([ts.number, ts.undefined, ts.string]),
	errorDescription: ts.union([ts.string, ts.undefined]),
	params: ts.union([ts.undefined, ts.record(ts.string, ts.any)])
});

export type IError = ts.TypeOf<typeof IErrorValidator>;
