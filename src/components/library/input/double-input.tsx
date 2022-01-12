import React, { memo, FC, SyntheticEvent } from 'react';

import { DoubleInputContainerStyled, DoubleInputStyled, Seperator, TopLabel, LabelFrom } from './input-styled';
import { LabelStyled } from './label-styled';

export const DoubleInput: FC<IProps> = ({
	type,
	inputType,
	label,
	onChangeFrom,
	onChangeTo,
	active,
	placeholderFrom,
	placeholderTo,
	autoFocus,
	nameFrom,
	nameTo,
	align,
	labelFrom,
	labelTo,
	secondInput,
	registerFrom,
	registerTo,
	errorTextFrom,
	errorTextTo,
	inputPadding
}) => (
	<LabelStyled>
		<DoubleInputContainerStyled errorText={errorTextFrom || errorTextTo} inputType={inputType}>
			<DoubleInputStyled
				type={type}
				inputType={inputType}
				onChange={onChangeFrom}
				active={active}
				placeholder={placeholderFrom}
				autoFocus={autoFocus}
				name={nameFrom}
				ref={registerFrom}
				secondInput={secondInput}
				inputPadding={inputPadding}
				autoComplete="off"
				{...(type === 'number' && { step: '0.00000001' })}
			/>
			{labelFrom && <LabelFrom>{labelFrom}</LabelFrom>}
			{secondInput && (
				<>
					<Seperator>/</Seperator>
					<DoubleInputStyled
						type={type}
						inputType={inputType}
						onChange={onChangeTo}
						active={active}
						placeholder={placeholderTo}
						autoFocus={autoFocus}
						name={nameTo}
						ref={registerTo}
						secondInput={secondInput}
						inputPadding={inputPadding}
						style={{ textAlign: align }}
						autoComplete="off"
						{...(type === 'number' && { step: '0.00000001' })}
					/>
					{labelTo && align === 'left' && <LabelFrom>{labelTo}</LabelFrom>}
				</>
			)}
		</DoubleInputContainerStyled>
		{label && <TopLabel className="input-label-double">{label}</TopLabel>}
	</LabelStyled>
);

export interface IProps {
	type?: 'text' | 'checkbox' | 'radio' | 'search' | 'number';
	inputType?: 'normal' | 'filter';
	onChangeFrom?: (e: SyntheticEvent) => void;
	onChangeTo?: (e: SyntheticEvent) => void;
	active?: boolean;
	label?: string;
	placeholderFrom?: string;
	placeholderTo?: string;
	autoFocus?: boolean;
	nameFrom?: string;
	nameTo?: string;
	align?: 'left' | 'right';
	labelFrom?: string;
	labelTo?: string;
	secondInput?: boolean;
	registerFrom?: any;
	registerTo?: any;
	errorTextFrom?: string;
	errorTextTo?: string;
	inputPadding?: string;
}

DoubleInput.defaultProps = {
	type: 'text',
	inputType: 'normal',
	active: false,
	autoFocus: false,
	align: 'right',
	secondInput: true,
	inputPadding: '40px'
} as Partial<IProps>;

export default memo(DoubleInput);
