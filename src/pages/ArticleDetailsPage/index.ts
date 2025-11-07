export { articleDetailsPageReducer } from './model/slices';
export type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
export { articleDetailsCommentsReducer } from './model/slices/articleDetailsCommentsSlice';
export {
    ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';

export type { ArticleDetailsPageSchema } from './model/types/index';
