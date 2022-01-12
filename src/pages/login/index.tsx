import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormContext, useForm } from 'react-hook-form';

import { FormInput, ErrorText } from '@/components/form';
import { Link } from '@components/library/link';
import Button from '@components/library/button';
import Helmet from '@/components/shared/helmet';
import { Divider } from '@/styled/shared/divider';
import { BlockStyled, H1 } from '@/styled/shared';
import { Flex, FlexItem } from '@/styled/flex';
import { required } from '@/utils/validator';
import { userActions } from '@/store/ducks/user';
import useActions from '@/hooks/useActions';
import useFormError from '@/hooks/useFormError';
import { ILoginParams } from '@/services/api/user/types';

export const Login = () => {
	const { t } = useTranslation();
	const methods = useForm<ILoginParams>();
	const login = useActions(userActions.login);
	const { formError, setFormError } = useFormError();

	const onSubmit = async (values: ILoginParams) => {
		try {
			setFormError();
			await login(values);
		} catch (error) {
			setFormError(error);
		}
	};

	return (
		<>
			<Helmet title={t('Log In')} />

			<FormContext {...methods}>
				<Flex center height="100%">
					<FlexItem flex="0 1 600px">
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							<Divider shadow="0px 3px 24px #9799c129" overflow="hidden">
								<BlockStyled formPadding>
									<H1 weight="600" align="center" margin="0 0 67px">
										{t('Log In')}
									</H1>

									<FormInput name="username" label={t('Enter E-mail')} validate={required} />

									<FormInput
										name="password"
										type="password"
										label={t('Enter Password')}
										validate={required}
										margin="0 0 10px"
									/>

									<ErrorText text={formError.errorDescription} center multiline />

									<Divider margin="14px 0">
										<Button type="submit" text={t('Login')} loading={methods.formState.isSubmitting} />
									</Divider>

									<Link to="/register">
										<Button buttonType="text" text={t('Sign Up')} />
									</Link>
								</BlockStyled>
							</Divider>
						</form>
					</FlexItem>
				</Flex>
			</FormContext>
		</>
	);
};

export default Login;
