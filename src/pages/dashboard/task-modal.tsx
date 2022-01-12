import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormContext, FormContextValues } from 'react-hook-form';

import Modal from '@/components/library/modal';
import Button from '@/components/library/button';
import { Flex, FlexItem } from '@/styled/flex';
import { Divider } from '@/styled/shared/divider';
import { FormSelect, FormInput } from '@/components/form';
import { required } from '@/utils/validator';
import { priorityOptions } from '@/utils/static-options';
import { IFormState } from '@/types/form';
import useToast from '@/hooks/useToast';
import { IColumn, ITask } from '@/types/models';
import tasksService from '@/services/firebase/tasks-service';

export const TaskModal: FC<IProps> = ({ formState, closeModal, methods, tasks, column, getTasks }) => {
	const { t } = useTranslation();
	const { toast } = useToast();
	const [deleteLoading, setDeleteLoading] = useState(false);

	const modalTitle = t(`${formState.mode === 'create' ? 'Add a card' : 'Edit'}`);

	const onSubmit = async (values: any) => {
		if (formState.mode === 'create') {
			const params = { ...values, columnId: column.id, index: tasks.length };
			await tasksService.create(params);
			await getTasks();
			toast.success('New card has been added');
		}
		if (formState.mode === 'edit') {
			const editParams = {
				...formState.selectedItem,
				...values
			};
			await tasksService.update(formState.selectedItem.id, editParams);
			await getTasks();
			toast.success('The card has been edited');
		}
		methods.reset();
		closeModal();
		return Promise.resolve();
	};

	const handleDelete = async () => {
		try {
			setDeleteLoading(true);
			await tasksService.remove(formState.selectedItem.id);
			await getTasks();
			toast.success('The card has been deleted');
			closeModal();
		} finally {
			setDeleteLoading(false);
		}
	};

	return (
		<Modal
			isOpen={formState.isOpen}
			closeModal={closeModal}
			title={modalTitle}
			overflow="visible"
			size="small"
			closeIcon={false}
		>
			<FormContext {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<Flex wrap="wrap">
						<FlexItem flex="1 1 100%">
							<FormInput name="name" label={t('Title')} validate={required} />
						</FlexItem>
						<FlexItem flex="1 1 100%">
							<FormSelect
								name="priority"
								placeholder="Priority"
								options={priorityOptions}
								emptyChooseOption={false}
								validate={required}
							/>
						</FlexItem>
						<FlexItem flex="1 1 100%">
							<FormInput name="content" label={t('Description')} />
						</FlexItem>

						<Button type="submit" text={t('Save')} loading={methods.formState.isSubmitting} />
					</Flex>
				</form>

				{formState.mode === 'edit' && (
					<div>
						<Divider margin="26px 0 4px" />
						<Button type="button" buttonType="text" text={t('Delete')} loading={deleteLoading} onClick={handleDelete} />
					</div>
				)}
			</FormContext>
		</Modal>
	);
};

interface IProps {
	formState: IFormState;
	closeModal: () => void;
	methods: FormContextValues<any>;
	tasks: ITask[];
	column: IColumn;
	getTasks: () => Promise<any>;
}

export default TaskModal;
