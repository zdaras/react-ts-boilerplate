import React, { FC } from 'react';
import { Range as ReactRange } from 'react-range';

import { RangeTrack, RangeThumb, RangeLabel, RangeContainer, RangeLabels, RangeBottomLabel } from './input-styled';

export const InputRange: FC<IProps> = ({
	setValue,
	name,
	value,
	label,
	labelMin = '',
	labelMax = '',
	maxValue,
	minValue,
	step,
	...prps
}) => {
	const onInputChange = (values: number[]) => {
		if (typeof setValue === 'function' && name) setValue(name, values[0]);
	};

	const val = (Number(value) < Number(minValue) ? minValue : Number(value) > Number(maxValue) ? maxValue : value) || 0;
	const rang = Number(maxValue) - Number(minValue);
	const stepInit = () => {
		if (typeof step === 'number') return step;
		if (rang <= 0.001) return 0.0001;
		if (rang <= 0.01) return 0.001;
		if (rang <= 0.1) return 0.01;
		if (rang <= 10) return 0.1;
		return 1;
	};

	return (
		<RangeContainer>
			<ReactRange
				values={[val]}
				step={stepInit()}
				min={minValue || 0}
				max={maxValue || 10}
				onChange={onInputChange}
				{...prps}
				disabled={!maxValue}
				renderTrack={({ props, children }) => (
					<div style={{ ...props.style }}>
						<RangeTrack ref={props.ref}>{children}</RangeTrack>
					</div>
				)}
				renderThumb={({ props }) => (
					<RangeThumb {...props}>
						<RangeLabel>
							<span>
								{label} {value} {labelMin}
							</span>
						</RangeLabel>
					</RangeThumb>
				)}
			/>
			<RangeLabels>
				<RangeBottomLabel>
					{minValue || 0} {labelMin}
				</RangeBottomLabel>
				<RangeBottomLabel>
					{maxValue || 0} {labelMax}
				</RangeBottomLabel>
			</RangeLabels>
		</RangeContainer>
	);
};

export interface IProps {
	value?: number;
	name?: string;
	register?: any;
	disabled?: boolean;
	setValue?: (name: string, value?: any) => any;
	label?: string;
	labelMin?: string;
	labelMax?: string;
	minValue?: number;
	maxValue?: number;
	step?: number;
}

export default InputRange;
