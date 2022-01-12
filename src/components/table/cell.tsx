import React, { FC } from 'react';
import { Link } from '@/components/library/link';
import { TD } from './table-styled';

export const Cell: FC<IProps> = ({ align, width, children, to, secondary, onClick, justify = 'flex-start' }) => {
	return (
		<TD align={align} width={width} secondary={secondary} onClick={onClick}>
			{to ? (
				<Link to={to} className="table-link" style={{ justifyContent: justify }}>
					{children}
				</Link>
			) : (
				<>{children}</>
			)}
		</TD>
	);
};

export interface IProps {
	align?: 'left' | 'right' | 'center';
	justify?: 'center' | 'flex-start' | 'flex-end' | 'space-bewteen';
	width?: string;
	to?: string;
	secondary?: boolean;
	onClick?: () => any;
}

export default Cell;
