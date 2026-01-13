import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const avatarUrl = "https://www.pinterest.com/pin/623607879639921421/"

const args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya', avatar: avatarUrl },
    },
};

export const Normal = Template.bind({});
Normal.args = args

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = args
NormalRedesigned.decorators = [NewDesignDecorator]

export const Dark = Template.bind({});
Dark.args = args
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = args
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)]

export const Orange = Template.bind({});
Orange.args = args
Orange.decorators = [ThemeDecorator(Theme.ORANGE)]

export const OrangeRedesigned = Template.bind({});
OrangeRedesigned.args = args
OrangeRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)]

export const Loading = Template.bind({});
Loading.args = {
    ...args,
    isLoading: true,
};

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {
    ...args,
    isLoading: true,
};
LoadingRedesigned.decorators = [NewDesignDecorator]

export const LoadingDark = Template.bind({});
LoadingDark.args = {
    ...args,
    isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)]

export const LoadingDarkRedesigned = Template.bind({});
LoadingDarkRedesigned.args = {
    ...args,
    isLoading: true,
};
LoadingDarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)]

export const LoadingOrange = Template.bind({});
LoadingOrange.args = {
    ...args,
    isLoading: true,
};
LoadingOrange.decorators = [ThemeDecorator(Theme.ORANGE)]

export const LoadingOrangeRedesigned = Template.bind({});
LoadingOrangeRedesigned.args = {
    ...args,
    isLoading: true,
};
LoadingOrangeRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)]