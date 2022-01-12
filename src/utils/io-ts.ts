import * as tPromise from 'io-ts-promise';

export const decode = async <T>(type: any, data: any, defaultDecode = true) => {
	try {
		if (process.env.NODE_ENV === 'production' || !defaultDecode) {
			const resolve: T = await Promise.resolve(data);
			return resolve;
		}

		const decoded: T = await tPromise.decode(type, data);
		return decoded;
	} catch (error) {
		if (tPromise.isDecodeError(error)) {
			console.error('Api type checking error:  ', error);
		} else {
			console.error('Server error: ', error);
		}
		return Promise.reject(error);
	}
};
