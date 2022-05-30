import Helmet from '@/components/shared/helmet';
import { H4 } from '@/styled/shared';
import { Flex } from '@/styled/flex';
import { numberToFixed } from '@/utils/number';
import Api from '@/services/api';
import { useApi, useTranslation } from '@/hooks';

export const Dashboard = () => {
	const { t } = useTranslation();
	const {
		data: { data = { name: '', priceUsd: '' } }
	} = useApi(Api.ticker.getAsset, { coin: 'bitcoin' });

	return (
		<>
			<Helmet title={t('Dashboard')} />

			<Flex center height="80%" direction="column">
				<H4>{data.name}</H4>
				<H4 padding="30px 0">$ {numberToFixed(data.priceUsd, 2)}</H4>
			</Flex>
		</>
	);
};

export default Dashboard;
