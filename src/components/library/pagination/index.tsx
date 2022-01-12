import React, { memo, FC, Fragment } from 'react';

import { generatePageRange } from '@/utils/pagination';
import { IPagination } from '@/types';

import { StyledPagination } from './pagnation.styled';

export const Pagination: FC<IProps> = ({ size, params, onPageChange }) => {
	if (!size || !params.limit) return null;
	const paginate = generatePageRange(params.startPage, size, params.limit) || [];

	return (
		<StyledPagination hidden={!paginate.length}>
			{paginate.map((item, i) => (
				<Fragment key={`li-${i}`}>
					{typeof item === 'number' ? (
						<li className={item === params.startPage ? 'active' : 'link'}>
							<div
								onClick={() => onPageChange({ ...params, startPage: item })}
								onKeyDown={() => onPageChange({ ...params, startPage: item })}
								role="button"
								tabIndex={0}
								style={{ outline: 'none' }}
							>
								{item}
							</div>
						</li>
					) : (
						<li style={{ pointerEvents: 'none' }}>{item}</li>
					)}
				</Fragment>
			))}
		</StyledPagination>
	);
};

export interface IProps {
	size: number;
	params: IPagination;
	onPageChange: (params?: any) => Promise<any>;
}

export default memo(Pagination);
