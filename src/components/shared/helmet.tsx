import React, { FC, memo } from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

export const Helmet: FC<IProps> = ({ title = '', description = '' }) => (
	<ReactHelmet>
		<title>{title}</title>
		<meta name="description" content={description} />
	</ReactHelmet>
);

interface IProps {
	title?: string;
	description?: string;
}

export default memo(Helmet);
