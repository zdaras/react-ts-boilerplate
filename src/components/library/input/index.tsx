import React, { useState, memo, FC, SyntheticEvent } from 'react';

import { AbsoluteInputIcon } from '@/styled/shared';
import { EyeShow, EyeHide, CalendarIcon, CloseSmallIcon } from '@/components/icons';

import { InputStyled, AbsoluteCompStyled } from './input-styled';
import { LabelStyled } from './label-styled';

type IType = 'text' | 'checkbox' | 'radio' | 'search' | 'number' | 'email' | 'password';

export const Input: FC<IProps> = ({
	value,
	id,
	type = 'text',
	inputType,
	label,
	onChange,
	active,
	placeholder,
	autoFocus,
	name,
	register,
	showPassword,
	errorText,
	AbsoluteComp,
	onClick,
	switcher,
	smallSwitcher,
	disabled,
	datepicker,
	onBlur,
	readOnly,
	checked,
	setValue,
	uncheck,
	autoComplete,
	success
}) => {
	const [typeState, setTypeState] = useState<IType>(type);
	const toggleShowPassword = () => {
		setTypeState(prev => (prev === 'password' ? 'text' : 'password'));
	};
	const clearValue = (e: any) => {
		e.preventDefault();
		if (typeof setValue === 'function' && name) setValue(name, null);
	};

	return (
		<LabelStyled type={typeState} disabled={disabled}>
			<InputStyled
				value={value}
				type={typeState}
				inputType={inputType}
				onChange={onChange}
				onBlur={onBlur}
				active={active}
				placeholder={placeholder}
				autoFocus={autoFocus}
				name={name}
				id={id || name}
				ref={register}
				errorText={errorText}
				onClick={onClick}
				disabled={disabled}
				readOnly={readOnly}
				autoComplete={autoComplete}
				switcher={switcher}
				smallSwitcher={smallSwitcher}
				AbsoluteComp={AbsoluteComp}
				checked={checked}
				uncheck={uncheck}
				success={success}
				{...(typeState === 'number' && { step: '0.00000001' })}
				{...(typeState === 'number' && { onKeyDown: evt => evt.key === 'e' && evt.preventDefault() })}
			/>
			{smallSwitcher && <div className="smallSwitcher" />}
			{label && (
				<label className="input-label" htmlFor={id || name} input-type={type}>
					{label}
				</label>
			)}
			{showPassword && (
				<AbsoluteInputIcon onClick={toggleShowPassword}>
					{typeState === 'password' ? <EyeShow /> : <EyeHide />}
				</AbsoluteInputIcon>
			)}
			{AbsoluteComp && <AbsoluteCompStyled>{AbsoluteComp}</AbsoluteCompStyled>}
			{!AbsoluteComp && datepicker && !value && (
				<AbsoluteCompStyled>
					<CalendarIcon />
				</AbsoluteCompStyled>
			)}
			{!AbsoluteComp && datepicker && value && (
				<AbsoluteCompStyled title="Clear" onClick={clearValue} style={{ cursor: 'pointer' }}>
					<CloseSmallIcon />
				</AbsoluteCompStyled>
			)}
			{switcher && <div className="switcher" />}
		</LabelStyled>
	);
};

export interface IProps {
	value?: any;
	id?: string;
	type?: IType;
	inputType?: 'normal' | 'filter';
	onChange?: (e: SyntheticEvent) => void;
	active?: boolean;
	label?: string | React.ReactNode;
	placeholder?: string;
	autoFocus?: boolean;
	name?: string;
	register?: any;
	showPassword?: boolean;
	errorText?: string;
	switcher?: boolean;
	smallSwitcher?: boolean;
	disabled?: boolean;
	AbsoluteComp?: React.ReactNode;
	onClick?: (e: SyntheticEvent) => void;
	onBlur?: (e: SyntheticEvent) => Promise<any> | any;
	datepicker?: boolean;
	readOnly?: boolean;
	checked?: boolean;
	setValue?: (name: string, value?: any) => any;
	uncheck?: boolean;
	autoComplete?: string;
	success?: boolean;
}

Input.defaultProps = {
	type: 'text',
	inputType: 'normal',
	active: false,
	autoFocus: false,
	placeholder: ' ',
	showPassword: false,
	AbsoluteComp: null,
	switcher: false,
	smallSwitcher: false,
	autoComplete: 'off'
} as Partial<IProps>;

export default memo(Input);

export { default as DoubleInput } from './double-input';
export { default as InputRange } from './input-range';
export { default as CodeInput } from './code-input';
