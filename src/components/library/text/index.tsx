import React, { memo, FC, ReactNode } from 'react';

import { TextStyled } from './text-styled';

export const Text: FC<IProps> = ({
	children,
	color,
	fontSize,
	align,
	display,
	margin,
	float,
	position,
	top,
	bold,
	...rest
}) => (
	<TextStyled
		top={top}
		position={position}
		color={color}
		display={display}
		align={align}
		fontSize={fontSize}
		margin={margin}
		float={float}
		bold={bold}
		{...rest}
	>
		{children}
	</TextStyled>
);

export interface IProps {
	children?: ReactNode;
	color?: string;
	align?: 'center' | 'left' | 'right';
	display?: string;
	margin?: string;
	fontSize?: string;
	float?: string;
	position?: string;
	top?: string;
	bold?: boolean;
	[key: string]: any;
}

Text.defaultProps = {
	align: 'left',
	display: 'block',
	bold: false
} as Partial<IProps>;

export default memo(Text);
