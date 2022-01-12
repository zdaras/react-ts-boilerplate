import { useState, useCallback } from 'react';

import { IError } from '@/types/error';

const initialError: IError = {
	errorCode: undefined,
	errorDescription: undefined,
	params: undefined
};

const useFormError = () => {
	const [formError, setErr] = useState(initialError);

	const setFormError = useCallback((error: any = initialError) => {
		setErr(error);
	}, []);

	return { formError, setFormError };
};

export default useFormError;
