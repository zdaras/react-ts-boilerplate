import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorWrapper, ErrorText as Text } from './form-styled';
import { IError } from '@/types/error';

export const ErrorText: FC<IProps> = ({
	text = '',
	formError = { errorDescription: '', params: {} },
	center = false,
	margin,
	show = true,
	inForm = false,
	multiline = false
}) => {
	const { t } = useTranslation();
	const errorMessage = formError.errorDescription || text;
	const txt = show && errorMessage ? errorMessage : '';

	return (
		<ErrorWrapper center={center} margin={margin} inForm={inForm} text={txt}>
			<Text text={txt} center={center} multiline={multiline} inForm={inForm}>
				{t(txt, formError.params)}
			</Text>
		</ErrorWrapper>
	);
};

export interface IProps {
	text?: string;
	formError?: IError;
	center?: boolean;
	margin?: string;
	show?: boolean;
	inForm?: boolean;
	multiline?: boolean;
}

export default memo(ErrorText);
