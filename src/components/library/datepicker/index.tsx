import React, { memo, FC, Component } from 'react';
import DatepickerComponent, { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import enGb from 'date-fns/locale/en-GB';

import Input, { IProps as IInputProps } from '@/components/library/input';

import './datepicker.scss';

registerLocale('en-gb', enGb);

// eslint-disable-next-line react/prefer-stateless-function
class ClassInput extends Component<IInputProps> {
	render() {
		return <Input {...this.props} readOnly />;
	}
}

export const Datepicker: FC<IProps> = ({
	name,
	value,
	onChange = () => {},
	register,
	dateFormat,
	locale,
	showTimeSelect,
	...props
}) => {
	const format = showTimeSelect ? 'd MMM yyyy HH:mm' : dateFormat;

	return (
		<DatepickerComponent
			name={name}
			value={value}
			// @ts-ignore
			selected={value}
			onChange={onChange}
			ref={register}
			dateFormat={format}
			locale={locale}
			customInput={<ClassInput datepicker {...props} />}
			formatWeekDay={formattedDate => formattedDate.substr(0, 3)}
			yearDropdownItemNumber={10}
			showTimeSelect={showTimeSelect}
			showMonthDropdown
			showYearDropdown
			{...props}
		/>
	);
};

export interface IProps
	extends Omit<ReactDatePickerProps, 'onChange' | 'onBlur'>,
		Omit<IInputProps, 'onChange' | 'onBlur' | 'value'> {
	register?: any;
	onChange?(date: Date | null, event: React.SyntheticEvent<any> | undefined): void;
}

Datepicker.defaultProps = {
	onChange: () => {},
	dateFormat: 'd MMM yyyy',
	locale: 'en-gb'
} as Partial<IProps>;

export default memo(Datepicker);
