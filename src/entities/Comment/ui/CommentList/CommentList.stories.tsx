import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'hello world!',
            user: {
                id: '1',
                username: 'Vasya',
            },
        },
        {
            id: '2',
            text: 'Привет мир!',
            user: {
                id: '2',
                username: 'Marat',
            },
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    comments: [
        {
            id: '1',
            text: 'hello world!',
            user: {
                id: '1',
                username: 'Vasya',
            },
        },
        {
            id: '2',
            text: 'Привет мир!',
            user: {
                id: '2',
                username: 'Marat',
            },
        },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
