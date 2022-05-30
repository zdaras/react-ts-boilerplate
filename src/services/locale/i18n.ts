import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/translation.json';
import ka from './ka/translation.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en-US',
		resources: {
			'en-US': { translation: en },
			ka: { translation: ka }
		},
		react: {
			nsMode: 'default',
			useSuspense: true
		},
		interpolation: {
			escapeValue: false
		},
		keySeparator: false,
		nsSeparator: false
	});

export const tr = i18n.t.bind(i18n);

export default i18n;
