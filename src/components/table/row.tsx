import React, { FC } from 'react';

import { IDataGrid } from '@/types/table';

import { TR } from './table-styled';

export const Row: FC<IProps> = ({ children, onClick = () => {}, item = {}, index = 0, dark, actionsHover }) => {
	return (
		<TR onClick={() => onClick(item, index)} dark={dark} actionsHover={actionsHover}>
			{children}
		</TR>
	);
};

interface IProps extends Pick<IDataGrid, 'onClick'> {
	item?: Record<string, any>;
	index?: number;
	dark?: boolean;
	actionsHover?: boolean;
}

export default Row;
