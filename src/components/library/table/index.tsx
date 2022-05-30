import { IDataGrid } from '@/types/table';
import { TableComp, TableContainer } from '@/styled/shared/table';

import TableHeader from './gg-grid-header';
import TableBody from './gg-grid-body';

export { default as Cell } from './cell';
export { default as Row } from './row';

export function Table<T>({
	headers,
	data,
	showHeader,
	renderHeader,
	renderBody,
	onClick,
	withIcon,
	hoverable,
	scale,
	overflow,
	containerProps
}: IProps<T>) {
	return (
		<TableContainer overflow={overflow} {...containerProps}>
			<TableComp withIcon={withIcon} hoverable={hoverable} scale={scale ? 'true' : undefined}>
				{showHeader && headers && headers.length > 0 && (
					<thead>{renderHeader ? renderHeader(headers) : <TableHeader headers={headers} />}</thead>
				)}
				{data && data.length > 0 && (
					<tbody>
						{renderBody ? (
							data.map((cell, index) => renderBody(cell, index))
						) : (
							<TableBody data={data} onClick={onClick} />
						)}
					</tbody>
				)}
			</TableComp>
		</TableContainer>
	);
}

type IProps<T = Record<string, any>> = IDataGrid<T>;

Table.defaultProps = {
	headers: [],
	data: [],
	showHeader: true,
	onClick: () => {},
	withIcon: false,
	hoverable: true,
	scale: true,
	containerProps: {}
} as Partial<IProps>;

export default Table;
