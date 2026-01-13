import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
    title: 'entities/Article/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => (
    <ArticleImageBlockComponent {...args} />
);

const defaultArgs = {
    block: {
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта"
    },
};

export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = defaultArgs;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = defaultArgs;
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = defaultArgs;
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OrangeRedesigned = Template.bind({});
OrangeRedesigned.args = defaultArgs;
OrangeRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.ORANGE),
];
