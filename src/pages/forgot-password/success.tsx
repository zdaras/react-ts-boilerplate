import { useTranslation } from 'react-i18next';

import { CheckIcon } from '@/components/icons';
import { Divider } from '@/styled/shared/divider';
import { BlockStyled, H4 } from '@/styled/shared';
import { Flex } from '@/styled/flex';

export const ForgotPasswordSuccess = ({ success }: IProps) => {
	const { t } = useTranslation();

	return (
		<Divider position="absolute" left={success} top="0px" transition="all 0.3s ease" height="100%" zIndex={2}>
			<BlockStyled formPadding shadow="none">
				<Flex center full direction="column">
					<CheckIcon width="42" height="42" />
					<H4 padding="20px 0 0">{t('Check your email for instructions')}</H4>
				</Flex>
			</BlockStyled>
		</Divider>
	);
};

export interface IProps {
	success?: string;
}

export default ForgotPasswordSuccess;
