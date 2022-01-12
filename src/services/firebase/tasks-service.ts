import { IGetAllTasksValidator, IGetAllTasks, ITask } from '@/types/models';
import { decode } from '@/utils/io-ts';

import { tasksCollection } from './index';

const getAll = async () => {
	const querySnapshot: any = await tasksCollection.orderBy('index', 'asc').get();
	const data: IGetAllTasks = [];
	querySnapshot.forEach((doc: any) => {
		data.push({ id: doc.id, ...doc.data() });
	});
	return decode<IGetAllTasks>(IGetAllTasksValidator, data);
};

const create = async (data: ITask) => {
	return tasksCollection.add(data);
};

const update = async (id: string, value: any) => {
	return tasksCollection.doc(id).update(value);
};

const remove = async (id: string) => {
	return tasksCollection.doc(id).delete();
};

const service = {
	getAll,
	create,
	update,
	remove
};

export default service;
