import React, { FC, memo, SyntheticEvent } from 'react';
import { useFormContext } from 'react-hook-form';

import DoubleInput, { IProps as IInputProps } from '@/components/library/input/double-input';
import { IValidation } from '@/types/form';

import { FormInputWrapper } from './form-styled';

export const FormDoubleInput: FC<IProps> = ({
	margin,
	padding,
	nameFrom,
	nameTo,
	onChangeFrom,
	onChangeTo,
	validateFrom,
	validateTo,
	listErrorFrom,
	listErrorTo,
	...props
}) => {
	const { register, errors } = useFormContext();
	let errorTextFrom: string | undefined = nameFrom && errors?.[nameFrom]?.message;
	if (listErrorFrom) {
		errorTextFrom = errors[listErrorFrom.name]?.[listErrorFrom.index]?.[listErrorFrom.fieldName]?.message;
	}
	let errorTextTo: string | undefined = nameTo && errors?.[nameTo]?.message;
	if (listErrorTo) errorTextTo = errors[listErrorTo.name]?.[listErrorTo.index]?.[listErrorTo.fieldName]?.message;

	return (
		<FormInputWrapper margin={margin} padding={padding}>
			<DoubleInput
				onChangeFrom={onChangeFrom}
				onChangeTo={onChangeTo}
				registerFrom={register({ validate: validateFrom })}
				registerTo={register({ validate: validateTo })}
				nameFrom={nameFrom}
				nameTo={nameTo}
				errorTextFrom={errorTextFrom}
				errorTextTo={errorTextTo}
				{...props}
			/>
		</FormInputWrapper>
	);
};

export interface IProps extends IInputProps {
	nameFrom?: string;
	nameTo?: string;
	margin?: string;
	padding?: string;
	onChangeFrom?: (e: SyntheticEvent) => void;
	onChangeTo?: (e: SyntheticEvent) => void;
	validateFrom?: IValidation;
	validateTo?: IValidation;
	listErrorFrom?: {
		name: string;
		index: number;
		fieldName: string;
	};
	listErrorTo?: {
		name: string;
		index: number;
		fieldName: string;
	};
}

export default memo(FormDoubleInput);
