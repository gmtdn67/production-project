import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './DropDown';
import { Button } from '../Button/Button';

export default {
    title: 'shared/DropDown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: 'first item',
        },
        {
            content: 'second item',
        },
        {
            content: 'third item',
        },
    ],
};
