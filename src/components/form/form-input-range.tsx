import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { InputRange } from '@/components/library/input';
import { IProps as IInputProps } from '@/components/library/input/input-range';
import { IValidation, IFormErrors } from '@/types/form';

import { FormInputWrapper } from './form-styled';

export const FormInputRange: FC<IProps> = ({ name, margin = '0', padding, disabled, validate, ...props }) => {
	const { register } = useFormContext<IFormErrors>();

	return (
		<FormInputWrapper margin={margin} padding={padding}>
			<InputRange disabled={disabled} name={name} register={register({ validate })} {...props} />
		</FormInputWrapper>
	);
};

export interface IProps extends IInputProps {
	name: string;
	margin?: string;
	padding?: string;
	validate?: IValidation;
	disabled?: boolean;
}

export default FormInputRange;
