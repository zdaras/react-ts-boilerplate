import { useState } from 'react';

import { ThenArg } from '@/types';
import { IError } from '@/types/error';

import { useFormError } from '.';

const useApiInForm = <T>(apiCallFunction: T, params = {}): IReturn<T> => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const { formError, setFormError } = useFormError();

	const callApi = async (par: any = null, withLoading = true) => {
		try {
			if (typeof apiCallFunction === 'function') {
				const parameters = par || params;
				if (withLoading) setLoading(true);
				setFormError();
				const response: ThenArg<T> = await apiCallFunction(parameters);
				setSuccess(true);

				return Promise.resolve(response);
			}
			return Promise.reject();
		} catch (err) {
			setFormError(err);
			return Promise.reject(err);
		} finally {
			setLoading(false);
		}
	};

	// @ts-ignore
	return [callApi, formError, loading, success];
};

type IReturn<T> = [T, IError, boolean, boolean];

export default useApiInForm;
