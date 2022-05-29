import { useTranslation } from 'react-i18next';

const useTranslationHook = () => {
	const { t } = useTranslation();

	return { t };
};

export default useTranslationHook;
