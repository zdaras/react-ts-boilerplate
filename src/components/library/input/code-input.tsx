import React, { FC, useState, useRef } from 'react';
import ReactCodeInput from 'react-verification-code-input';

import { CodeInputContainer } from './input-styled';
import './code-input.scss';

export const CodeInput: FC<IProps> = ({ onComplete, ...props }) => {
	const [loading, setLoading] = useState(false);
	const ref = useRef<any>(null);

	const onSubmit = async (val: string) => {
		try {
			setLoading(true);
			if (typeof onComplete === 'function') await onComplete(val);
		} finally {
			setLoading(false);
			if (ref.current) ref.current.iRefs[5].current.focus(); // focus last input
		}
	};

	return (
		<CodeInputContainer>
			<ReactCodeInput {...props} disabled={loading} onComplete={onSubmit} ref={ref} />
		</CodeInputContainer>
	);
};

export interface IProps {
	type?: 'text' | 'number';
	onChange?: (val: string) => void;
	onComplete?: (val: string) => Promise<any>;
	fields?: number;
	loading?: boolean;
	title?: string;
	fieldWidth?: number;
	fieldHeight?: number;
	autoFocus?: boolean;
	className?: string;
	values?: string[];
	disabled?: boolean;
	required?: boolean;
	placeholder?: string[];
}

CodeInput.defaultProps = {
	type: 'number',
	className: 'two-fa-code',
	required: true,
	placeholder: ['•', '•', '•', '•', '•', '•']
};

export default CodeInput;
