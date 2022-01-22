import React, { FC } from 'react';

import { IDataGrid } from '@/types/table';

import { Cell, Row } from '../index';

export const TableBody: FC<IDataGrid> = ({ data = [], onClick }) => (
	<>
		{data.map((item, index) => (
			<Row key={`data-row-${index}`} onClick={onClick} item={item} index={index}>
				{Object.values(item).map((value: any, i: number) => (
					<Cell key={`data-cell-${i}`}>{value}</Cell>
				))}
			</Row>
		))}
	</>
);

export default TableBody;
