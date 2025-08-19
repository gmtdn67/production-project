import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'This is title!',
    text: 'This is text!',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'This is title!',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'This is text!',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'This is title!',
    text: 'This is text!',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'This is title!',
};

onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'This is text!',
};

onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'This is title!',
    text: 'This is text!',
    theme: TextTheme.ERROR,
};
