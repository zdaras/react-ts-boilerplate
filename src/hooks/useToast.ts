import useActions from '@/hooks/useActions';
import toastReducer, { toastActions } from '@/store/ducks/toast';

const useToast = () => {
	const toast = useActions(toastActions);
	const hideToast = useActions(toastReducer.actions.hideToast);

	return { toast, hideToast };
};

export default useToast;
