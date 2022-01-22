import React, { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import Select, { IProps as ISelectProps } from '@/components/library/select';

import { FormInputWrapper } from './form-styled';
import ErrorText from './error';

export const FormSelect: FC<IProps> = ({
	name,
	margin,
	padding,
	hidden,
	validate,
	showErrorText,
	defaultValue,
	...props
}) => {
	const { formState, control } = useFormContext();
	const errorText: string | undefined = formState.errors && formState.errors[name]?.message;

	return (
		<FormInputWrapper margin={margin} padding={padding} hidden={hidden} showErrorText={showErrorText}>
			<Controller
				render={() => <Select name={name} errorText={errorText} {...props} />}
				name={name}
				control={control}
				rules={{ validate }}
				defaultValue={defaultValue}
			/>

			{showErrorText && <ErrorText inForm text={errorText} show={showErrorText} />}
		</FormInputWrapper>
	);
};

export interface IProps extends Partial<ISelectProps> {
	name: string;
	margin?: string;
	padding?: string;
	hidden?: boolean;
	validate?: any;
	showErrorText?: boolean;
}

FormSelect.defaultProps = {
	showErrorText: false
} as IProps;

export default FormSelect;
