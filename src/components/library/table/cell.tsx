import { FC } from '@/types';

import { TD } from './table-styled';

export const Cell: FC<IProps> = ({ align, width, children, secondary, onClick }) => {
	return (
		<TD align={align} width={width} secondary={secondary} onClick={onClick}>
			{children}
		</TD>
	);
};

export interface IProps {
	align?: 'left' | 'right' | 'center';
	justify?: 'center' | 'flex-start' | 'flex-end' | 'space-bewteen';
	width?: string;
	secondary?: boolean;
	onClick?: () => any;
}

export default Cell;
