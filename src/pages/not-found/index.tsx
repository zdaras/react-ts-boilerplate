import { useTranslation } from 'react-i18next';

import { Flex } from '@/styled/flex';
import { H1, RouteWrapperStyled, NotFoundWrapperStyled } from '@/styled/shared';
import Helmet from '@/components/shared/helmet';
import NotFoundIcon from '@/assets/icons/404_icon.svg';

export const NotFound = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet title={t('Not found')} />

			<RouteWrapperStyled>
				<Flex center direction="column" height="70%">
					<NotFoundWrapperStyled>
						<img src={NotFoundIcon} alt="404" />
						<H1 margin="22px 0 12px">{t('Not Found')}</H1>
					</NotFoundWrapperStyled>
				</Flex>
			</RouteWrapperStyled>
		</>
	);
};

export default NotFound;
