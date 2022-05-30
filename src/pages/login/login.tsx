import { useLocation } from 'react-router-dom';

import { FormInput, ErrorText, Form } from '@/components/form';
import { Link } from '@/components/library/link';
import Button from '@/components/library/button';
import Helmet from '@/components/shared/helmet';
import { Divider } from '@/styled/shared/divider';
import { BlockStyled, H1 } from '@/styled/shared';
import { Flex, FlexItem } from '@/styled/flex';
import { required, isEmail } from '@/utils/validator';
import { userActions } from '@/store/ducks/user';
import { useActions, useApiFormSubmit, useTranslation } from '@/hooks';
import { ILoginParams } from '@/services/api/user/types';

export const Login = () => {
	const { t } = useTranslation();
	const { state } = useLocation();
	const redirect = (state as any)?.from?.pathname || '/';
	const login = useActions(userActions.login);
	const [loginAction, formError, loading] = useApiFormSubmit(login);

	const onSubmit = async (values: ILoginParams) => loginAction(values, redirect);

	return (
		<>
			<Helmet title={t('Log In')} />

			<Flex center height="100%">
				<FlexItem flex="0 1 600px">
					<Form onSubmit={onSubmit}>
						<Divider shadow="0px 3px 24px #9799c129" overflow="hidden">
							<BlockStyled formPadding>
								<H1 weight="600" align="center" margin="0 0 67px">
									{t('Log In')}
								</H1>

								<FormInput name="username" label={t('Enter E-mail')} validate={isEmail} />

								<FormInput
									name="password"
									type="password"
									label={t('Enter Password')}
									validate={required}
									AbsoluteComp={
										<Link to="/forgot-password">
											<Button buttonType="text" text={t('Forgot?')} padding="0" />
										</Link>
									}
								/>

								<ErrorText center multiline formError={formError} />

								<Divider margin="14px 0">
									<Button type="submit" text={t('Login')} loading={loading} />
								</Divider>

								<Link to="/register">
									<Button buttonType="text" text={t('Sign Up')} />
								</Link>
							</BlockStyled>
						</Divider>
					</Form>
				</FlexItem>
			</Flex>
		</>
	);
};

export default Login;
