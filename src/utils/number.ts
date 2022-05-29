export const randomInt = (min = 0, max = 100000) => Math.floor(Math.random() * (max - min + 1) + min);

export const numberToFixed = (n: number | string, decimal = 8) => parseFloat(Number(n).toFixed(decimal));

export const numberToFixedString = (n: number | string, decimal = 8) => {
	if (['undefined', 'null', 'NaN'].includes(String(n))) return '';
	const spl = String(numberToFixed(Number(n), decimal)).split('.');
	if (!spl.length || !spl[1]) return numberToFixed(Number(n), decimal);
	const zerosToAdd = decimal - spl[1].length;
	const z = Array.from(Array(zerosToAdd).keys())
		.map(() => '0')
		.join('');
	return `${spl[0]}.${spl[1]}${z}`;
};
