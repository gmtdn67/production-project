import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesInfiniteListProps {
    className?: string;
}

export const ArticlesInfiniteList = ({ className }: ArticlesInfiniteListProps) => {
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} theme={TextTheme.ERROR} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
};
