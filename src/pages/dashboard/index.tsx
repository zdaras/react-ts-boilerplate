import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DragDropContext } from 'react-beautiful-dnd';

import Helmet from '@/components/shared/helmet';
import Button from '@/components/library/button';
import columnsService from '@/services/firebase/columns-service';
import tasksService from '@/services/firebase/tasks-service';
import { H4 } from '@/styled/shared';
import { IColumn, ITask } from '@/types/models';
import { arrayMove, transformTasksByColumns } from '@/utils/helpers';

import { BoardContainer, BoardTopPanel, ColumnsContainer } from './dashboard-styled';
import Column from './column';

export const Dashboard = () => {
	const { t } = useTranslation();
	const [columns, setColumns] = useState<IColumn[]>([]);
	const [tasks, setTasks] = useState<Record<string, ITask[]>>({});

	const getColumns = async () => {
		const data = await columnsService.getAll();
		setColumns(data);
	};

	const getTasks = async () => {
		const data = await tasksService.getAll();
		setTasks(transformTasksByColumns(data));
	};

	const onDragEnd = async (result: any) => {
		const { source, destination } = result;
		const sourceColumnId = source.droppableId;
		const destinationColumnId = destination.droppableId;
		const sourceList = tasks[sourceColumnId] || [];
		const destList = tasks[destinationColumnId] || [];

		if (!destination) return; // dropped outside the list

		// same column
		if (sourceColumnId === destinationColumnId) {
			arrayMove(destList, source.index, destination.index);
			setTasks(prev => ({ ...prev, [destinationColumnId]: destList }));
			destList.forEach((item, index) => {
				tasksService.update(item.id, { columnId: destinationColumnId, index });
			});
		} else {
			// different column
			const draggingTask = sourceList.splice(source.index, 1);
			destList.splice(destination.index, 0, draggingTask[0]);
			setTasks(prev => ({ ...prev, [sourceColumnId]: sourceList, [destinationColumnId]: destList }));
			destList.forEach((item, index) => {
				tasksService.update(item.id, { columnId: destinationColumnId, index });
			});
			sourceList.forEach((item, index) => {
				tasksService.update(item.id, { columnId: sourceColumnId, index });
			});
		}
	};

	useEffect(() => {
		getColumns();
		getTasks();
	}, []);

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Helmet title={t('Dashboard')} />

			<BoardContainer>
				<BoardTopPanel>
					<H4>{t('Board')}</H4>
					<Button text={t('Add a column')} inline buttonType="text" padding="0" icon="plus" />
				</BoardTopPanel>
				<ColumnsContainer>
					{columns.map((item, index) => {
						const filteredTasks = tasks[item.id] || [];

						return <Column key={item.id} column={item} tasks={filteredTasks} index={index} getTasks={getTasks} />;
					})}
				</ColumnsContainer>
			</BoardContainer>
		</DragDropContext>
	);
};

export default Dashboard;
