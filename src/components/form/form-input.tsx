import React, { FC, memo } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import Input, { IProps as IInputProps } from '@/components/library/input';
import { IValidation, IRegExp } from '@/types/form';

import { FormInputWrapper } from './form-styled';
import ErrorText from './error';

export const FormInput: FC<IProps> = ({
	name,
	margin,
	padding,
	disabled,
	validate,
	pattern,
	showErrorText,
	listError,
	...props
}) => {
	const { formState, control } = useFormContext();
	let errorText: string | undefined = formState.errors?.[name]?.message;
	if (listError) errorText = formState.errors[listError.name]?.[listError.index]?.[listError.fieldName]?.message;

	return (
		<FormInputWrapper margin={margin} padding={padding} showErrorText={showErrorText}>
			<Controller
				render={({ field }) => {
					return <Input disabled={disabled} errorText={errorText} {...props} {...field} ref={null} />;
				}}
				name={name}
				control={control}
				rules={{ validate, pattern }}
				defaultValue=""
			/>

			{showErrorText && <ErrorText inForm text={errorText} show={showErrorText} />}
		</FormInputWrapper>
	);
};

export interface IProps extends IInputProps {
	name: string;
	margin?: string;
	padding?: string;
	validate?: IValidation;
	pattern?: IRegExp;
	disabled?: boolean;
	showErrorText?: boolean;
	listError?: {
		name: string;
		index: number;
		fieldName: string;
	};
}

FormInput.defaultProps = {
	showErrorText: false
} as IProps;

export default memo(FormInput);
