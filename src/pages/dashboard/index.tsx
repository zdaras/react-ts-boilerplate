import React from 'react';
import { useTranslation } from 'react-i18next';

import Helmet from '@/components/shared/helmet';
import { H4 } from '@/styled/shared';
import { Flex } from '@/styled/flex';

export const Dashboard = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet title={t('Dashboard')} />

			<Flex full center>
				<H4>{t('Dashboard')}</H4>
			</Flex>
		</>
	);
};

export default Dashboard;
