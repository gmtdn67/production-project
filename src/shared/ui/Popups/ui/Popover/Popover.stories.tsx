import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from './Popover';

export default {
    title: '/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
