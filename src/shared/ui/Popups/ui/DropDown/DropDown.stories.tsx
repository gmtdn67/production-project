import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Dropdown } from './DropDown';

export default {
    title: 'shared/Popups/DropDown',
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
