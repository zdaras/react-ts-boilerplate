import React from 'react';
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form';

const Form = ({ defaultValues = {}, children, onSubmit }: IProps) => {
	const methods = useForm({ defaultValues });

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				{typeof children === 'function' ? children({ methods }) : children || null}
			</form>
		</FormProvider>
	);
};

interface IProps {
	onSubmit: (data: any) => Promise<any>;
	defaultValues?: Record<string, any>;
	children?: React.ReactNode | React.ReactNode[] | (({ methods }: { methods: UseFormReturn }) => JSX.Element);
}

export default Form;
