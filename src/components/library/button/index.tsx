import React, { memo, FC, ReactNode, SyntheticEvent } from 'react';

import Icons from '@/components/icons';

import { ButtonStyled, ButtonText } from './button-styled';

export const Button: FC<IProps> = ({
	type,
	children,
	onClick,
	active,
	disabled,
	buttonType,
	inline,
	icon,
	text,
	circle,
	padding,
	loading,
	fontSize,
	className,
	height
}) => {
	const Icon = icon ? Icons[icon] : () => null;

	return (
		<ButtonStyled
			type={type}
			onClick={onClick}
			active={active}
			disabled={disabled}
			buttonType={buttonType}
			inline={inline}
			circle={circle}
			padding={padding}
			loading={loading ? 'true' : undefined}
			className={className}
			height={height}
		>
			<Icon />
			{text && <ButtonText fontSize={fontSize}>{text}</ButtonText>}
			{children}
		</ButtonStyled>
	);
};

export interface IProps {
	type?: 'submit' | 'reset' | 'button';
	children?: ReactNode;
	onClick?: (e: SyntheticEvent) => any;
	active?: boolean;
	disabled?: boolean;
	buttonType?: 'normal' | 'primary' | 'medium' | 'text' | 'outline' | 'circle';
	inline?: boolean;
	icon?: keyof typeof Icons;
	text?: string;
	circle?: boolean;
	padding?: string;
	loading?: boolean | string;
	fontSize?: string;
	className?: string;
	height?: string;
}

Button.defaultProps = {
	type: 'button',
	active: false,
	disabled: false,
	inline: false,
	circle: false,
	loading: false
} as Partial<IProps>;

export default memo(Button);
