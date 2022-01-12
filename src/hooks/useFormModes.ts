import { useState, useCallback } from 'react';

import { IModes, IFormState, IFormReset } from '@/types/form';

const modes: IModes = { create: 'create', edit: 'edit' };
const initialSelectedItem = (item = {}) => item;

const initialState: IFormState = {
	mode: modes.create,
	isOpen: false,
	selectedItem: initialSelectedItem()
};

const useFormModes = (defaultValues = initialSelectedItem(), reset?: IFormReset) => {
	const [state, setState] = useState({ ...initialState, selectedItem: defaultValues });

	const handleOpen = useCallback(() => {
		setState(prev => ({ ...prev, selectedItem: initialSelectedItem(defaultValues), mode: modes.create, isOpen: true }));
		if (typeof reset === 'function') reset(defaultValues); // form reset with default values
	}, []);

	const handleClose = useCallback(() => {
		setState(prev => ({ ...prev, isOpen: false }));
	}, []);

	const setItem = useCallback((selectedItem = initialSelectedItem(defaultValues), mode = modes.edit) => {
		setState(prev => ({ ...prev, selectedItem, mode, isOpen: true }));
		if (typeof reset === 'function') reset(selectedItem); // form reset with new values
	}, []);

	const handleItemChange = useCallback((data: Record<string, any>, customData?: Record<string, any>) => {
		setItem(customData || data);
	}, []);

	return { state, handleOpen, handleClose, setItem, handleItemChange };
};

export default useFormModes;
