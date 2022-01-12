import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormContext, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { Flex, FlexItem } from '@/styled/flex';
import { FormInput, ErrorText } from '@/components/form';
import { Divider } from '@/styled/shared/divider';
import Button from '@components/library/button';
import { BlockStyled, H1 } from '@/styled/shared';
import Tooltip from '@components/library/tooltip';
import Helmet from '@/components/shared/helmet';
import useFormError from '@/hooks/useFormError';
import { isValidPassword } from '@/utils/validator';
import { qs } from '@/utils/helpers';
import { userActions } from '@/store/ducks/user';
import useActions from '@/hooks/useActions';
import { IRecoverPasswordParams } from '@/services/api/user/types';

export const PasswordRecovery = () => {
	const { t } = useTranslation();
	const queryParams: { key?: string } = qs.parse(useLocation().search); // { key: string }
	const methods = useForm<IRecoverPasswordParams>();
	const passwordValue = methods.watch('password');
	const { formError, setFormError } = useFormError();
	const recoverPassword = useActions(userActions.recoverPassword);

	const onSubmit = async (values: IRecoverPasswordParams) => {
		try {
			const params = { ...values, key: queryParams.key };
			setFormError();
			await recoverPassword(params);
			methods.reset();
		} catch (error) {
			setFormError(error);
		}
	};

	return (
		<>
			<Helmet title={t('Password Recovery')} />

			<FormContext {...methods}>
				<Flex center height="100%">
					<FlexItem flex="0 1 600px">
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							<BlockStyled formPadding>
								<Divider margin="40px 0">
									<H1 weight="600" align="center" margin="0 0 60px">
										{t('Password Recovery')}
									</H1>

									<FormInput
										autoFocus
										type="password"
										name="password"
										label={t('New password')}
										validate={isValidPassword}
										AbsoluteComp={
											<Tooltip
												text={t(
													'Minimum 8 characters, at least one lowercase, one uppercase letter, one number and one symbol.'
												)}
											/>
										}
									/>

									<FormInput
										type="password"
										name="verifiedPassword"
										label={t('Reset password')}
										validate={value => (value !== passwordValue ? 'Does not match' : undefined)}
										showErrorText
									/>

									<ErrorText text={formError.errorDescription} center margin="10px 0" />

									<Button type="submit" text={t('Confirm')} loading={methods.formState.isSubmitting} />
								</Divider>
							</BlockStyled>
						</form>
					</FlexItem>
				</Flex>
			</FormContext>
		</>
	);
};

export default PasswordRecovery;
