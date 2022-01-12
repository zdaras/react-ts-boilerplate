import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Modal from '@/components/library/modal';
import Button from '@/components/library/button';
import { H5 } from '@/styled/shared';
import { Divider } from '@/styled/shared/divider';

export const DeleteModal: FC<IProps> = ({ isOpen, closeModal, onDelete, text, autoClose }) => {
	const { t } = useTranslation();
	const [loading, setLoading] = useState(false);

	const handleDelete = async () => {
		setLoading(true);
		await onDelete();
		setLoading(false);
		if (autoClose) closeModal();
	};

	return (
		<Modal size="small" closeIcon={false} isOpen={isOpen} closeModal={closeModal} title={t('Delete')} centerTitle>
			{text && (
				<H5 opacity="1" padding="0 0 34px" align="center">
					{t(text)}
				</H5>
			)}
			<Button text={t('Delete')} onClick={handleDelete} loading={loading} />
			<Divider margin="0 0 15px 0" />
			<Button text={t('Cancel')} onClick={closeModal} buttonType="text" />
		</Modal>
	);
};

interface IProps {
	isOpen: boolean;
	closeModal: () => void;
	onDelete: (p?: any) => Promise<void>;
	text?: string;
	autoClose?: boolean;
}

DeleteModal.defaultProps = {
	text: 'Are you sure you want to delete the item?',
	autoClose: true
} as Partial<IProps>;

export default DeleteModal;
