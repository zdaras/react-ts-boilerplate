import { ReactElement, useState, memo, ReactNode } from 'react';

import { H4, H5 } from '@/styled/shared';
import { Flex } from '@/styled/flex';
import { FC } from '@/types';

import { AccordionContainer, AccordionTitle, AccordionContent, AccordionIcon, Line } from './accordion-styled';

export const Accordion: FC<IProps> = ({ children, inBlock = false }) => (
	<AccordionContainer inBlock={inBlock}>{children}</AccordionContainer>
);

export const AccordionSection: FC<ISectionProps> = memo(
	({ children, title = '', text = '', expanded, withOverflow }) => {
		const [open, setOpen] = useState(expanded);

		const toggleOpen = () => setOpen(prev => !prev);

		return (
			<>
				<AccordionTitle>
					<Flex align="center" justify="space-between">
						<H4 role="button" onClick={toggleOpen}>
							{title}
						</H4>
						<AccordionIcon role="button" onClick={toggleOpen}>
							<Line />
							<Line expanded={open} second />
						</AccordionIcon>
					</Flex>
					{text && (
						<H5 padding="14px 54px 0 0" opacity="0.8">
							{text}
						</H5>
					)}
				</AccordionTitle>
				<AccordionContent role="region" expanded={open} withOverflow={withOverflow}>
					<section>{children}</section>
				</AccordionContent>
			</>
		);
	}
);

interface IProps {
	inBlock?: boolean;
	children: ReactElement | ReactElement[] | any;
}

export interface ISectionProps {
	title?: string;
	text?: string | ReactNode;
	expanded?: boolean;
	withOverflow?: boolean;
}

AccordionSection.defaultProps = {
	title: '',
	text: '',
	expanded: false
} as Partial<ISectionProps>;

export default memo(Accordion);
