import React, { FC, Fragment } from 'react';
import ContentLoader from 'react-content-loader';

import { Flex } from '@/styled/flex';

// table row height 60px

export const LoadingTable: FC<IProps> = ({ loading, error, count = 10, withCircle }) => {
	if (!loading || (!error && !loading)) return null;

	return (
		<Flex width="100%" direction="column">
			{loading && !error && (
				<ContentLoader width="100%" height={`${count * 60}px`}>
					{Array.from(Array(count).keys()).map((n: number) => (
						<Fragment key={n}>
							{withCircle && <circle cx="27" cy={n === 0 ? 22 : n * 61 + 22} r="21" />}
							<rect x={withCircle ? '100' : '0'} y={n === 0 ? 14 : n * 61 + 14} rx="5" ry="5" width="10%" height="17" />
							<rect
								x={withCircle ? '300' : '200'}
								y={n === 0 ? 14 : n * 61 + 14}
								rx="5"
								ry="5"
								width="10%"
								height="17"
							/>
							<rect
								x={withCircle ? '500' : '400'}
								y={n === 0 ? 14 : n * 61 + 14}
								rx="5"
								ry="5"
								width="32%"
								height="17"
							/>
							<rect
								x={withCircle ? '1000' : '900'}
								y={n === 0 ? 14 : n * 61 + 14}
								rx="5"
								ry="5"
								width="40%"
								height="17"
							/>
						</Fragment>
					))}
				</ContentLoader>
			)}
		</Flex>
	);
};

interface IProps {
	loading: boolean;
	error?: boolean;
	count?: number;
	withCircle?: boolean;
}

LoadingTable.defaultProps = {
	loading: true,
	error: false,
	count: 10,
	withCircle: false
} as Partial<IProps>;

export default LoadingTable;
