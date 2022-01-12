import { IGetAllColumnsValidator, IGetAllColumns, IColumn } from '@/types/models';
import { sortByIndex } from '@/utils/helpers';
import { decode } from '@/utils/io-ts';

import { columnsCollection } from './index';

const getAll = async () => {
	const querySnapshot: any = await columnsCollection.get();
	const data: IGetAllColumns = [];
	querySnapshot.forEach((doc: any) => {
		data.push({ id: doc.id, ...doc.data() });
	});
	return decode<IGetAllColumns>(IGetAllColumnsValidator, sortByIndex(data));
};

const create = async (data: IColumn) => {
	return columnsCollection.add(data);
};

const update = async (id: string, value: any) => {
	return columnsCollection.doc(id).update(value);
};

const remove = async (id: string) => {
	return columnsCollection.doc(id).delete();
};

const service = {
	getAll,
	create,
	update,
	remove
};

export default service;
