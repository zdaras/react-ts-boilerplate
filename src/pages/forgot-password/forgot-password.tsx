import { Flex, FlexItem } from '@/styled/flex';
import { Divider } from '@/styled/shared/divider';
import { BlockStyled, H1, H5 } from '@/styled/shared';
import { Form, FormInput, ErrorText } from '@/components/form';
import { Link } from '@/components/library/link';
import Button from '@/components/library/button';
import Helmet from '@/components/shared/helmet';
import Api from '@/services/api';
import { useApiFormSubmit, useTranslation } from '@/hooks';
import { required } from '@/utils/validator';

import ForgotPasswordSuccess from './success';

const Forgot = () => {
	const { t } = useTranslation();
	const [sendRecoveryEmail, formError, loading, success] = useApiFormSubmit(Api.user.sendRecoveryEmail);

	const onSubmit = async (values: Parameters<typeof sendRecoveryEmail>[0]) => sendRecoveryEmail(values);

	return (
		<>
			<Helmet title={t('Forgot Password')} />

			<Flex center height="100%">
				<FlexItem flex="0 1 600px">
					<Form onSubmit={onSubmit}>
						<Divider shadow="0px 3px 24px #9799c129" overflow="hidden">
							<ForgotPasswordSuccess success={success ? '0px' : '-600px'} />

							<BlockStyled formPadding>
								<H1 weight="600" align="center" margin="0 0 20px">
									{t('Recover Password')}
								</H1>

								<H5 opacity="1" align="center" padding="0 0 50px">
									{t('Enter your e-mail address to reset your password')}
								</H5>

								<FormInput name="username" label="Enter E-mail" validate={required} />

								<ErrorText center formError={formError} />

								<Button type="submit" text={t('Send E-mail')} loading={loading} />

								<Link to="/login">
									<Button buttonType="text" text={t('Back to Login')} padding="20px" />
								</Link>
							</BlockStyled>
						</Divider>
					</Form>
				</FlexItem>
			</Flex>
		</>
	);
};

export default Forgot;
