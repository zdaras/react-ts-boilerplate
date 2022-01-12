import React, { FC, memo } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import Datepicker, { IProps as IDatepickerProps } from '@/components/library/datepicker';
import { IValidation } from '@/types/form';

import { FormInputWrapper } from './form-styled';
import ErrorText from './error';

export const FormDatepicker: FC<IProps> = ({ name, margin, padding, validate, showErrorText, ...props }) => {
	const { errors, control } = useFormContext();
	const errorText: string | undefined = errors && errors[name]?.message;

	return (
		<FormInputWrapper margin={margin} padding={padding}>
			<Controller
				as={<Datepicker name={name} errorText={errorText} {...props} />}
				name={name}
				control={control}
				rules={{ validate }}
				mode="onChange"
				type="input"
			/>

			{showErrorText && <ErrorText inForm text={errorText} show={showErrorText} />}
		</FormInputWrapper>
	);
};

export interface IProps extends IDatepickerProps {
	name: string;
	margin?: string;
	padding?: string;
	validate?: IValidation;
	onChange?(date: Date | null, event: React.SyntheticEvent<any> | undefined): void;
	showErrorText?: boolean;
}

FormDatepicker.defaultProps = {
	showErrorText: false
};

export default memo(FormDatepicker);
