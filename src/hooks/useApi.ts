import { useState, useCallback } from 'react';

import { ThenArg, IPagination } from '@/types';
import { useEffectOnce } from '@/hooks';

const useApi = <T>(
	apiCallFunction: T,
	params = {},
	fetchOnMount = true,
	initialData: any = [],
	overridePrevCall = false
): IReturn<T> => {
	const [res, setData] = useState(initialData);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [fetched, setFetched] = useState(false);
	const [fetchCount, setFetchCount] = useState(0);
	const [requestCount, setRequestCount] = useState(0);
	const [p, setParameters] = useState(params);

	const handleFetch = (result: ThenArg<T>) => {
		setFetchCount(prev => {
			const isPrevApiCall = prev > requestCount;
			if (!isPrevApiCall || overridePrevCall) setData(result); // dont overwrite with previous apiCallFunction
			return prev + 1;
		});
	};

	const fetchUrl = useCallback(async (par: any = null, withLoading = true) => {
		try {
			const newParams = par || params;
			if (typeof apiCallFunction === 'function') {
				setRequestCount(prev => prev + 1);
				if (withLoading) setLoading(true);
				setParameters(prev => ({ ...prev, ...newParams }));
				const response: ThenArg<T> = await apiCallFunction(newParams);
				setError(false);
				handleFetch(response);

				return Promise.resolve(response);
			}
			return Promise.reject();
		} catch (err) {
			setError(true);
			return Promise.reject(err);
		} finally {
			setLoading(false);
			setFetched(true);
		}
	}, []);

	const reset = useCallback((resetParams = true) => {
		setData(initialData);
		setLoading(false);
		setError(false);
		setFetched(false);
		setFetchCount(0);
		setRequestCount(0);
		if (resetParams) setParameters(params);
	}, []);

	const resetParameters = useCallback(() => setParameters(params), []);

	useEffectOnce(() => {
		if (fetchOnMount) fetchUrl();
	});

	// @ts-ignore
	return { data: res, loading, error, fetchUrl, fetched, fetchCount, p, reset, requestCount, resetParameters };
};

type IReturn<T> = {
	data: ThenArg<T>;
	loading: boolean;
	error: boolean;
	fetchUrl: T;
	fetched: boolean;
	fetchCount: number;
	p: IPagination;
	reset: () => void;
	requestCount: number;
	resetParameters: () => void;
};

export default useApi;
