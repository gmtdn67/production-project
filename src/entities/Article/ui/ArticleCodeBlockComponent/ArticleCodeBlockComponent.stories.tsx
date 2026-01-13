import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => (
    <ArticleCodeBlockComponent {...args} />
);

const args = {
    block: {
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    }
};

export const Primary = Template.bind({});
Primary.args = args;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = args;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = args;
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = args;
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OrangeRedesigned = Template.bind({});
OrangeRedesigned.args = args;
OrangeRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)];