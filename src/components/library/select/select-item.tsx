import React, { memo, FC, SyntheticEvent } from 'react';

import Icons from '@/components/icons';

import { SelectOptionStyled, IconContainer } from './select-styled';

export const SelectItem: FC<ISelectOptionStyled> = ({
	children,
	onClick,
	active,
	icon,
	text,
	dropdownType,
	optionType
}) => {
	const Icon = icon ? Icons[icon] : () => null;

	return (
		<SelectOptionStyled onClick={onClick} active={active} dropdownType={dropdownType} optionType={optionType}>
			{icon && (
				<IconContainer>
					<Icon />
				</IconContainer>
			)}
			{text && <span>{text}</span>}
			{children}
		</SelectOptionStyled>
	);
};

export interface ISelectOptionStyled {
	active?: boolean;
	dropdownType?: 'select' | 'dropdown';
	optionType?: 'select-item' | 'dropdown-item';
	onClick?: (e: SyntheticEvent) => any;
	icon?: keyof typeof Icons;
	text?: string;
	[key: string]: any;
}

SelectItem.defaultProps = {
	active: false,
	dropdownType: 'select',
	optionType: 'dropdown-item'
} as Partial<ISelectOptionStyled>;

export default memo(SelectItem);
