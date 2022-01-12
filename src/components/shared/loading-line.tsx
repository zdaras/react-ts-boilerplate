import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

import { Flex } from '@/styled/flex';

export const LoadingLine: FC<IProps> = ({ loading, error, width, height, margin = '0', type }) => {
	if (!loading || (!error && !loading)) return null;

	return (
		<Flex width="auto" direction="column">
			{loading && !error && (
				<ContentLoader width={width} height={height} style={{ borderRadius: '6px', margin }}>
					{type === 'line' && <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />}
					{type === 'circle' && <circle cx="25" cy="26" r="25" />}
				</ContentLoader>
			)}
		</Flex>
	);
};

interface IProps {
	loading: boolean;
	error?: boolean;
	width: string;
	height: string;
	margin?: string;
	type?: 'line' | 'circle';
}

LoadingLine.defaultProps = {
	loading: true,
	error: false,
	margin: '0',
	type: 'line'
} as Partial<IProps>;

export default LoadingLine;
