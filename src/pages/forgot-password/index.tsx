import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FormContext, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { Flex, FlexItem } from '@/styled/flex';
import { FormInput, ErrorText } from '@/components/form';
import { Link } from '@components/library/link';
import { Divider } from '@/styled/shared/divider';
import Button from '@components/library/button';
import Helmet from '@/components/shared/helmet';
import { BlockStyled, H1, H5, Message } from '@/styled/shared';
import useFormError from '@/hooks/useFormError';
import { required } from '@/utils/validator';
import Api from '@/services/api';
import { qs } from '@/utils/helpers';

import ForgotPasswordSuccess from './success';

export const Forgot = () => {
	const { t } = useTranslation();
	const [left, setLeft] = useState(false);
	const methods = useForm();
	const { formError, setFormError } = useFormError();
	const [showTwoFaCancelMessage, setCancelMessage] = useState(false);
	const queryParams: { cancelTwoFaRecovery?: string } = qs.parse(useLocation().search); // { cancelTwoFaRecovery: true }

	useEffect(() => {
		if (queryParams.cancelTwoFaRecovery) setCancelMessage(true);
	}, []);

	const onSubmit = async (values = {}) => {
		try {
			setFormError();
			await Api.user.sendRecoveryEmail(values);
			methods.reset();
			setLeft(true);
		} catch (error) {
			setFormError(error);
		}
	};

	return (
		<>
			<Helmet title={t('Forgot Password')} />

			<FormContext {...methods}>
				<Flex center height="100%">
					<FlexItem flex="0 1 600px">
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							<Divider shadow="0px 3px 24px #9799c129" overflow="hidden">
								<ForgotPasswordSuccess left={left ? '0px' : '-600px'} />

								<BlockStyled formPadding>
									<Divider margin={showTwoFaCancelMessage ? '10px 0' : '40px 0'}>
										<H1 weight="600" align="center" margin="0 0 20px">
											{t('Forgot Password')}
										</H1>

										<H5 opacity="1" align="center">
											{t('Enter your e-mail address to reset your password')}
										</H5>

										<Divider margin="60px 0 0">
											<FormInput name="username" autoFocus label="Enter E-mail" validate={required} margin="0" />
										</Divider>

										<ErrorText text={formError.errorDescription} center margin="10px 0" />

										<Button type="submit" text={t('Send E-mail')} loading={methods.formState.isSubmitting} />

										<Divider margin="14px 0 0 0">
											<Link to="/login">
												<Button buttonType="text" text={t('Back to Login')} />
											</Link>
										</Divider>
									</Divider>
									{showTwoFaCancelMessage && (
										<Message>
											{t(
												'2FA recovery process was canceled. If you did not request 2FA recovery it is recommended to reset your password'
											)}
										</Message>
									)}
								</BlockStyled>
							</Divider>
						</form>
					</FlexItem>
				</Flex>
			</FormContext>
		</>
	);
};

export default Forgot;
