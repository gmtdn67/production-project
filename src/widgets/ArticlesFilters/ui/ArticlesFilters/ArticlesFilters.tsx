import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (newSort: ArticleType) => void;
    onChangeSearch: (value: string) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        order,
        search,
        sort,
        type,
    } = props;

    const { t } = useTranslation();
    return (
        <Card
            className={classNames(cls.ArticlesFilters, {}, [className])}
            padding="24"
        >
            <VStack gap="32">
                <Input
                    data-testid="SearchInput"
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
});
