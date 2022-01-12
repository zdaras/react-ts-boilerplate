import queryString from 'query-string';

import i18n from '@/services/locale/i18n';

export const isDev = process.env.NODE_ENV === 'development';

export const { t } = i18n;

export const sortByIndex = (data: any[]) => data.sort((a, b) => (a.index > b.index ? 1 : -1));

export const arrayMove = (ar: any[], fromIndex: number, toIndex: number) => {
	ar.splice(toIndex, 0, ar.splice(fromIndex, 1)[0]);
};

export const transformTasksByColumns = (data: any[] = []) => {
	const newData: any = {};
	data.forEach(item => {
		newData[item.columnId] = [...(newData[item.columnId] || []), item];
	});
	return newData;
};

export const randomInt = (min = 0, max = 100000) => Math.floor(Math.random() * (max - min + 1) + min);

export const capitalize = (s: string, lowercase = true) => {
	if (typeof s !== 'string') return '';
	const secontPart = lowercase ? s.slice(1).toLowerCase() : s.slice(1);
	return s.charAt(0).toUpperCase() + secontPart;
};

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getFileAndName = (res: any) => {
	const [, filename] = res.headers['content-disposition'].split('filename=');
	return { data: res.data, filename };
};

export const downloadBlobFile = (file: any, filename: string) => {
	const url = window.URL.createObjectURL(new Blob([file]));
	const link = document.createElement('a');
	link.href = url;
	link.setAttribute('download', filename);
	document.body.appendChild(link);
	link.click();
	if (link && link.parentNode) link.parentNode.removeChild(link);
};

export const qs = queryString;

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

export const debounce = (func: (args?: any) => any, wait = 300) => {
	let timeout: any;

	return function executedFunction(...args: any[]) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};
