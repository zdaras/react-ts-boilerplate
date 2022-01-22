import dayjs from 'dayjs';

import i18n from '@/services/locale/i18n';

export const dateTimeFormat = 'YYYY-MM-DDTHH:mm:ss.SSS';
export const dateFormat = 'DD-MM-YYYY';
export const defaultDateFormat = 'DD MMM, YYYY';
export const defaultDatetimeFormat = 'DD MMM, YYYY HH:mm';

export const convertIsoDateOffset = (date: IDate) => {
	const [splitDate, offset] = String(date).split('+');

	if (!offset) return `${date}+00:00`;

	if (offset.indexOf(':') >= 0) return date;

	const hoursOffset = offset.substring(0, 2) || '00';
	const secondsOffset = offset.substring(2, 4) || '00';

	return `${splitDate}+${hoursOffset}:${secondsOffset}`;
};

export const formatDate = (date: IDate | null, format: IFormat = defaultDateFormat) => {
	if (!date) return false;

	const formattedDate = dayjs(convertIsoDateOffset(date)).format(format);

	return formattedDate;
};

export type IDate = string | number | Date | dayjs.Dayjs | undefined;
export type IFormat = 'DD MMM, YYYY' | 'YYYY-MM-DDTHH:mm:ss.SSS' | 'DD-MM-YYYY' | 'DD MMM, YYYY HH:mm';

export const minutesToTime = (min: number | string | null) => {
	if (!min) return '';
	const m = Number(min);
	const hours = m / 60;
	const rhours = Math.floor(hours);
	const minutes = (hours - rhours) * 60;
	const rminutes = Math.round(minutes);
	const days = m / 1440;
	const rdays = Math.round(days);

	if (min < 60) return `${rminutes} ${rminutes === 1 ? i18n.t('Minute') : i18n.t('Minutes')}`;
	if (min < 1440) return `${rhours} ${rhours === 1 ? i18n.t('Hour') : i18n.t('Hours')}`;
	return `${rdays} ${rdays === 1 ? i18n.t('Day') : i18n.t('Days')}`;
};

export const secondsToTime = (seconds: number | string | null) => {
	if (!seconds) return '';
	const s = Number(seconds);
	const m = s / 60;
	const hours = m / 60;
	const rhours = Math.floor(hours);
	const minutes = (hours - rhours) * 60;
	const rminutes = Math.round(minutes);
	const days = m / 1440;
	const rdays = Math.round(days);
	const weeks = Math.round(m / 10080);
	const months = Math.round(m / 43200);

	if (m < 60) return `${rminutes} ${rminutes === 1 ? i18n.t('Minute') : i18n.t('Minutes')}`;
	if (m < 1440) return `${rhours} ${rhours === 1 ? i18n.t('Hour') : i18n.t('Hours')}`;
	if (m < 10080) return `${rdays} ${rdays === 1 ? i18n.t('Day') : i18n.t('Days')}`;
	if (m < 43200) return `${weeks} ${weeks === 1 ? i18n.t('Week') : i18n.t('Weeks')}`;
	return `${months} ${months === 1 ? i18n.t('Month') : i18n.t('Months')}`;
};

export const convertTimeToSeconds = (v: number | string, type?: 'Minute' | 'Hour' | 'Day' | 'Week' | 'Month') => {
	if (!v || !type) return 0;
	const num = Number(v);

	switch (type) {
		case 'Minute':
			return num * 60;
		case 'Hour':
			return num * 3600;
		case 'Day':
			return num * 3600 * 24;
		case 'Week':
			return num * 3600 * 24 * 7;
		case 'Month':
			return num * 3600 * 24 * 30;
		default:
			return 0;
	}
};

export const convertSecondsToTime = (v: number | string) => {
	if (!v) return { type: '', value: 0 };
	const num = Number(v);

	if (num < 3600) return { type: 'Minute', value: num / 60 };
	if (num < 86400) return { type: 'Hour', value: Math.round(num / 3600) };
	if (num < 604800) return { type: 'Day', value: Math.round(num / 86400) };
	if (num < 2592000) return { type: 'Week', value: Math.round(num / 604800) };
	return { type: 'Month', value: Math.round(num / 2592000) };
};

export const isSame = (d1: Date, d2: Date, type: any = 'day') => {
	return dayjs(d1).isSame(d2, type);
};

export const isAfter = (d1: Date, d2: Date, type: any = 'day') => {
	return dayjs(d1).isAfter(d2, type);
};

export const dateSubstract = (date?: Date, range = 3, type: any = 'month') => {
	return new Date(dayjs(date).subtract(range, type).format());
};

export const dateAdd = (date?: Date, range = 3, type: any = 'month') => {
	return new Date(dayjs(date).add(range, type).format());
};
