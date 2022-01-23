import React, { FC, memo } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import Datepicker, { IProps as IDatepickerProps } from '@/components/library/datepicker';
import { IValidation } from '@/types/form';

import { FormInputWrapper } from './form-styled';
import ErrorText from './error';

export const FormDatepicker: FC<IProps> = ({ name, margin, padding, validate, showErrorText, ...props }) => {
	const { formState, control } = useFormContext();
	const errorText: string | undefined = formState.errors && formState.errors[name]?.message;

	return (
		<FormInputWrapper margin={margin} padding={padding}>
			<Controller
				render={({ field }) => {
					return <Datepicker errorText={errorText} {...props} {...field} ref={null} />;
				}}
				name={name}
				control={control}
				rules={{ validate }}
				defaultValue={null}
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
} as IProps;

export default memo(FormDatepicker);
