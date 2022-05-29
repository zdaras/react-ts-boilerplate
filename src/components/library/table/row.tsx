import { IDataGrid } from '@/types/table';
import { FC } from '@/types';

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

Row.defaultProps = {
	item: {},
	index: 0,
	dark: false,
	actionsHover: false
};

export default Row;
