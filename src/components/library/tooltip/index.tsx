import { memo, FC } from 'react';

import { TooltipIcon } from '@/components/icons';

import { StyledTooltip } from './tooltip.styled';

export const Tooltip: FC<IProps> = ({ Trigger, children, text, width, className, ...props }) => (
	<StyledTooltip width={width} className={className || ''}>
		{Trigger ? (
			<div className="trigger">
				<Trigger />
			</div>
		) : (
			<TooltipIcon {...props} />
		)}
		<span className="tooltip-text">{text || children}</span>
	</StyledTooltip>
);

export interface IProps {
	Trigger?: () => any;
	text?: string;
	width?: string;
	className?: string;
	[key: string]: any;
}

export default memo(Tooltip);
