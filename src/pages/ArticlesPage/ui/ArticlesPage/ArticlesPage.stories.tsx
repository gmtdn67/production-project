import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({
    articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 9,
        isLoading: false,
        hasMore: true,
        sort: ArticleSortField.CREATED,
        order: 'asc',
        search: '',
        type: ArticleType.ALL,
        view: ArticleView.SMALL,
        _inited: true,
        error: undefined,
    },

})];
