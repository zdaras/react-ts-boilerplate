import * as ts from 'io-ts';

export const IColumnValidator = ts.type({
	id: ts.string,
	index: ts.union([ts.string, ts.number]),
	name: ts.string
});

export const IGetAllColumnsValidator = ts.array(IColumnValidator);

export const ITaskValidator = ts.type({
	id: ts.string,
	index: ts.union([ts.string, ts.number]),
	name: ts.string,
	content: ts.string,
	columnId: ts.string,
	priority: ts.union([ts.literal('low'), ts.literal('medium'), ts.literal('high'), ts.literal('')])
});

export const IGetAllTasksValidator = ts.array(ITaskValidator);

export type IColumn = ts.TypeOf<typeof IColumnValidator>;

export type IGetAllColumns = ts.TypeOf<typeof IGetAllColumnsValidator>;

export type ITask = ts.TypeOf<typeof ITaskValidator>;

export type IGetAllTasks = ts.TypeOf<typeof IGetAllTasksValidator>;
