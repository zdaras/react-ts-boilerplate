import React from 'react';
import { useTranslation } from 'react-i18next';

import Helmet from '@/components/shared/helmet';
import { H4 } from '@/styled/shared';
import { Flex } from '@/styled/flex';
import { numberToFixed } from '@/utils/number';
import Api from '@/services/api';
import { useApi } from '@/hooks';

export const Dashboard = () => {
	const { t } = useTranslation();
	const [{ ticker = { price: '' } }] = useApi(Api.ticker.getBtcUsdTicker);

	return (
		<>
			<Helmet title={t('Dashboard')} />

			<Flex center height="80%" direction="column">
				<H4>{t('BTC-USD')}</H4>
				<H4 padding="30px 0">$ {numberToFixed(ticker.price, 2)}</H4>
			</Flex>
		</>
	);
};

export default Dashboard;
