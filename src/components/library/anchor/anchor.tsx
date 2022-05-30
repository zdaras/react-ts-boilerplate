import { AnchorHTMLAttributes, memo } from 'react';

import { FC } from '@/types';

import { AnchorStyled } from './anchor-styled';

export const Anchor: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, ...props }) => (
	<AnchorStyled {...props}>{children}</AnchorStyled>
);

export default memo(Anchor);
