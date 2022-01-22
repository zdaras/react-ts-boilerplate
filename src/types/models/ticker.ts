import * as ts from 'io-ts';

export const IBtcUsdValidator = ts.type({
	ticker: ts.type({
		base: ts.string,
		target: ts.string,
		price: ts.string,
		volume: ts.string,
		change: ts.string
	}),
	timestamp: ts.number,
	success: ts.boolean,
	error: ts.string
});

export type IBtcUsd = ts.TypeOf<typeof IBtcUsdValidator>;
