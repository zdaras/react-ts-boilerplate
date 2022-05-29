import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '@/components/library/button';

export default {
	title: 'Button',
	component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ ...rest }) => <Button {...rest} />;

export const Primary = Template.bind({});

Primary.args = {
	buttonType: 'primary',
	text: 'Primary',
	inline: true
};
