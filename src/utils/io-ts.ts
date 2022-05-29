import * as T from 'io-ts';
import * as E from 'fp-ts/Either';
import { failure } from 'io-ts/PathReporter';
import { pipe } from 'fp-ts/lib/function';

import config from '@/utils/config';

const decodeWith =
	<ApplicationType = any, EncodeTo = ApplicationType, DecodeFrom = unknown>(
		codec: T.Type<ApplicationType, EncodeTo, DecodeFrom>
	) =>
	(data: DecodeFrom): ApplicationType =>
		pipe(
			codec.decode(data),
			E.getOrElseW(errors => {
				console.error(failure(errors).join('\n'));
				return data as any;
				// throw new Error(failure(errors).join('\n'));
			})
		);

export const decode =
	<ApplicationType = any, EncodeTo = ApplicationType, DecodeFrom = unknown>(
		c: T.Type<ApplicationType, EncodeTo, DecodeFrom>,
		defaultDecode = true
	) =>
	(response: any): T.TypeOf<typeof c> => {
		if (config.isProd || !defaultDecode) {
			const resolve: T.TypeOf<typeof c> = response.data;
			return resolve;
		}

		return decodeWith(c)(response.data);
	};
