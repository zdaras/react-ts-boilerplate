import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Flex } from '@/styled/flex';
import Button from '@components/library/button';
import { H1, H5 } from '@/styled/shared';
import Api from '@/services/api';
import useToast from '@/hooks/useToast';

export const EmailConfirmation: FC<IProps> = ({ hideConfirmation, userId }) => {
	const { t } = useTranslation();
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();

	const resendEmail = async () => {
		try {
			setLoading(true);
			setSent(false);
			await Api.user.resendEmail({ userId });
			setSent(true);
			toast.success('Email has been sent to you');
		} catch (error) {
			setSent(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Flex center full hide={hideConfirmation} position="absolute" direction="column">
			<img alt="mailing" src="../../assets/icons/mailing.svg" />
			<H1 align="center" margin="80px 10px 20px">
				{t('E-mail Confirmation Sent!')}
			</H1>
			<H5 align="center" padding="0 0 170px">
				{t('Please check your inbox and click the link to confirm your account')}
			</H5>
			<H5 align="center" margin="0 5px 0 0">
				{t('If you haven’t received an e-mail from us, check your spam folder or click below')}
			</H5>
			<Button
				buttonType="text"
				text={t('Resend Confirmation')}
				onClick={resendEmail}
				disabled={sent}
				loading={loading}
			/>
		</Flex>
	);
};

interface IProps {
	hideConfirmation: boolean;
	userId?: string;
}

export default EmailConfirmation;
