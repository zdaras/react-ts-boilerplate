export const arrayRequired = (value: any, error = 'Required') => {
	const array = Array.isArray(value) ? value : Array(value);
	return !array.length ? error : undefined;
};

export const required = (value: any, error = 'Required') => {
	if (Array.isArray(value)) return arrayRequired(value);
	return !value || !String(value).trim() ? error : undefined;
};

export const minString = (value: any, error = 'Too long', max = 40, min = 1) => {
	const len = String(value).trim().length;
	return len > max || len < min ? error : undefined;
};

const startingWithZeroregExp = /^0[0-9].*$/;

export const minNumber = (value: number, equals = false, length = 0, nonEmpty = false, error = 'Required') => {
	if (nonEmpty && required(value)) return error;
	const startsWithZero = startingWithZeroregExp.test(String(value));
	if (startsWithZero) return error;
	return equals ? (Number(value) >= length ? undefined : error) : Number(value) > length ? undefined : error;
};

export const maxNumber = (value: number, length = 0, equals = false, nonEmpty = false, error = 'Required') => {
	if (nonEmpty && required(value)) return error;
	const startsWithZero = startingWithZeroregExp.test(String(value));
	if (startsWithZero) return error;
	if (!equals && Number(value) <= 0) return error;
	return Number(value) <= length ? undefined : error;
};

export const emailRegex = new RegExp(
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

// min 8, one lowercase, one uppercase, one number, one symbol
export const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&()\\-_=+*,./<>?])(?=.{8,})');

export const isEmail = (value: any, error = 'Invalid email') => {
	return !emailRegex.test(value) ? error : undefined;
};

export const isValidPassword = (value: any, error = 'Invalid password') => {
	return !passwordRegex.test(value) ? error : undefined;
};

export const isValidUrl = (value: any, error = 'Invalid url format') => {
	const url = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'gi');
	return !url.test(value) ? error : undefined;
};

export const isInteger = (value: any, error = 'Must be integer') => {
	return Number.isInteger(Number(value)) ? undefined : error;
};
