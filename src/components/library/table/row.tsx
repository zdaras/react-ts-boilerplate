import { IDataGrid } from '@/types/table';
import { FC } from '@/types';

import { TR } from './table-styled';

export const Row: FC<IProps> = ({ children, onClick = () => {}, item = {}, index = 0 }) => {
	return <TR onClick={() => onClick(item, index)}>{children}</TR>;
};

interface IProps extends Pick<IDataGrid, 'onClick'> {
	item?: Record<string, any>;
	index?: number;
}

Row.defaultProps = {
	item: {},
	index: 0
};

export default Row;
