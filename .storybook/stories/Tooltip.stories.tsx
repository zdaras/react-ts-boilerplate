import { ComponentMeta, ComponentStory } from '@storybook/react';

import Ttip from '@/components/library/tooltip';

export default {
	title: 'Tooltip',
	component: Ttip
} as ComponentMeta<typeof Ttip>;

const Template: ComponentStory<typeof Ttip> = ({ ...rest }) => (
	<div style={{ padding: '50px 100px' }}>
		<Ttip {...rest} />
	</div>
);

export const Tooltip = Template.bind({});

Tooltip.args = {
	text: 'Tooltip text'
};
