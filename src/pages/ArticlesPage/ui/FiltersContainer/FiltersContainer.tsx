import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        order,
        search,
        sort,
        type,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            type={type}
            search={search}
            sort={sort}
            order={order}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            onChangeSearch={onChangeSearch}
            className={className}
        />
    );
});
