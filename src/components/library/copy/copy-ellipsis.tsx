import React, { memo, FC } from 'react';

import Copy from '.';

export const ellipsis = (t = '', l = 12, show = 5) => {
	if (String(t).length > l) return `${t.substr(0, show)}...${t.slice(-show)}`;
	return t;
};

export const CopyEllipsis: FC<IProps> = ({ text, icon, onClick, AfterTextComp, letterLimit, show }) => (
	<div style={{ display: 'flex', alignItems: 'center' }}>
		{text && <div style={{ marginRight: '15px', letterSpacing: '0.4px' }}>{ellipsis(text, letterLimit, show)}</div>}
		{AfterTextComp}
		{icon && <Copy text={text} onClick={onClick} />}
	</div>
);

export interface IProps {
	text: string;
	icon?: boolean;
	onClick?: () => any;
	AfterTextComp?: any;
	letterLimit?: number;
	show?: number;
}

CopyEllipsis.defaultProps = {
	text: '',
	icon: true,
	AfterTextComp: null
} as Partial<IProps>;

export default memo(CopyEllipsis);
