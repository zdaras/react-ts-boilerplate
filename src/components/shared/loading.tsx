import React, { FC } from 'react';

import { Flex } from '@/styled/flex';
import { Loading as LoadingStyled } from '@/components/shared/loading-large';

export const Loading: FC<IProps> = ({ loading, error, loadingText }) => {
	if (!loading || (!error && !loading)) return null;

	return (
		<Flex center direction="column" height="260px">
			{loading && !error && (
				<>
					<LoadingStyled />
					<span style={{ fontSize: '14px' }}>{loadingText}</span>
				</>
			)}
		</Flex>
	);
};

interface IProps {
	loading: boolean;
	error?: boolean;
	loadingText?: string;
}

Loading.defaultProps = {
	loading: true,
	error: false,
	loadingText: 'Loading..'
} as Partial<IProps>;

export default Loading;
