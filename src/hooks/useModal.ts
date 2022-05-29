import { useState, useCallback } from 'react';

const useModal = <T extends Record<string, any>>(initialState = false, initState = {} as T): IReturn<T> => {
	const [isOpen, setOpen] = useState(initialState);
	const [item, setSelectedItem] = useState(initState);

	const closeModal = useCallback(() => {
		setSelectedItem(initState);
		setOpen(false);
	}, [isOpen, setOpen]);

	const openModal = useCallback(
		(setItem = null) => {
			if (setItem) setSelectedItem(setItem);
			setOpen(true);
		},
		[isOpen, setOpen]
	);

	return { isOpen, closeModal, openModal, item };
};

interface IReturn<T> {
	isOpen: boolean;
	closeModal: () => void;
	openModal: (setItem?: any) => void;
	item: T;
}

export default useModal;
