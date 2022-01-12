import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorWrapper, ErrorText as Text } from './form-styled';

export const ErrorText: FC<IProps> = ({
	text = '',
	center = false,
	margin,
	show = true,
	inForm = false,
	multiline = false
}) => {
	const { t } = useTranslation();

	return (
		<ErrorWrapper center={center} margin={margin} inForm={inForm}>
			<Text text={text && show ? text : ''} center={center} multiline={multiline}>
				{t(text)}
			</Text>
		</ErrorWrapper>
	);
};

interface IProps {
	text?: string;
	center?: boolean;
	margin?: string;
	show?: boolean;
	inForm?: boolean;
	multiline?: boolean;
}

export default memo(ErrorText);
