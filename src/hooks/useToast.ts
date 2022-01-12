import { useSelector } from 'react-redux';

import useActions from '@/hooks/useActions';
import toastReducer, { toastActions, toastSelectors } from '@/store/ducks/toast';

const useToast = () => {
	const toast = useActions(toastActions);
	const setProgress = useActions(toastReducer.actions.setProgress);
	const unsetProgress = useActions(toastReducer.actions.unsetProgress);
	const hideToast = useActions(toastReducer.actions.hideToast);
	const isProcessing = useSelector(toastSelectors.isProcessing);
	const processToasts = useSelector(toastSelectors.processToasts);
	const minimizeModal = useActions(toastReducer.actions.minimizeModal);

	return { toast, setProgress, unsetProgress, hideToast, isProcessing, processToasts, minimizeModal };
};

export default useToast;
