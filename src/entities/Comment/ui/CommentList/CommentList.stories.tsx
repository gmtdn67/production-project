import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

const avatarUrl = "https://www.pinterest.com/pin/623607879639921421/"

const defaultArgs = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya', avatar: avatarUrl },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { id: '1', username: 'Petya', avatar: avatarUrl },
        },
    ],
};

export const Normal = Template.bind({});
Normal.args = defaultArgs

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = defaultArgs
NormalRedesigned.decorators = [NewDesignDecorator]

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {
    comments: [],
    isLoading: true,
};
LoadingRedesigned.decorators = [NewDesignDecorator]