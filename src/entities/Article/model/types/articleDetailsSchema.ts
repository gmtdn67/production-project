import { Article } from './artcile';

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article
}
