import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Button from '@/components/library/button';
import { H5 } from '@/styled/shared';
import { IColumn, ITask } from '@/types/models';
import useFormModes from '@/hooks/useFormModes';

import TaskModal from './task-modal';

import { ColumnAddButton, TaskStyled, TaskTitle, TaskPriority, ColumnStyled } from './dashboard-styled';

export const Column: FC<IProps> = ({ column, tasks, getTasks }) => {
	const { t } = useTranslation();
	const defaultValues = { priority: null };
	const methods = useForm({ defaultValues });
	const { state, handleOpen, handleClose, handleItemChange } = useFormModes(defaultValues, methods.reset);

	const handleEdit = async (item: ITask) => {
		handleItemChange(item);
	};

	return (
		<>
			<Droppable droppableId={column.id}>
				{provided => (
					<ColumnStyled ref={provided.innerRef}>
						<H5>{column.name}</H5>

						{tasks.map((task, index) => (
							<Draggable key={task.id} draggableId={task.id} index={index}>
								{providedDraggable => (
									<TaskStyled
										ref={providedDraggable.innerRef}
										{...providedDraggable.draggableProps}
										{...providedDraggable.dragHandleProps}
										style={providedDraggable.draggableProps.style}
										onClick={() => handleEdit(task)}
									>
										<TaskTitle>{task.name}</TaskTitle>
										{task.priority && <TaskPriority priority={task.priority}>{task.priority}</TaskPriority>}
									</TaskStyled>
								)}
							</Draggable>
						))}

						{provided.placeholder}

						<ColumnAddButton>
							<Button buttonType="text" inline text={t('Add a card')} padding="0" icon="plus" onClick={handleOpen} />
						</ColumnAddButton>
					</ColumnStyled>
				)}
			</Droppable>

			<TaskModal
				formState={state}
				closeModal={handleClose}
				methods={methods}
				tasks={tasks}
				column={column}
				getTasks={getTasks}
			/>
		</>
	);
};

interface IProps {
	column: IColumn;
	tasks: ITask[];
	index: number;
	getTasks: () => Promise<any>;
}

export default Column;
