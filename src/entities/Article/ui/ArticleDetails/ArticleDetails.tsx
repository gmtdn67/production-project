import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import {
    HStack as HStackDeprecated,
    VStack as VStackDeprecated,
} from '@/shared/ui/deprecated/Stack';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { renderArticleBlock } from './renderBlock';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <HStackDeprecated
                justify="center"
                max
                className={cls.avatarWrapper}
            >
                <AvatarDeprecated
                    size={200}
                    src={article?.img}
                    className={cls.avatar}
                />
            </HStackDeprecated>
            <VStackDeprecated gap="4" max data-testid="ArticleDetails.Info">
                <TextDeprecated
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <HStackDeprecated gap="8" className={cls.articleInfo}>
                    <IconDeprecated className={cls.icon} Svg={EyeIcon} />
                    <TextDeprecated text={String(article?.views)} />
                </HStackDeprecated>
                <HStackDeprecated gap="8" className={cls.articleInfo}>
                    <IconDeprecated className={cls.icon} Svg={CalendarIcon} />
                    <TextDeprecated text={article?.createdAt} />
                </HStackDeprecated>
            </VStackDeprecated>
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <Text title={article?.title} size="l" bold />
            <Text title={article?.subtitle} />
            <AppImage
                fallback={<Skeleton width="100%" height="420" border="16px" />}
                src={article?.img}
                className={cls.img}
            />
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <>
                        <Skeleton
                            className={cls.avatar}
                            width={200}
                            height={200}
                            border="50%"
                        />
                        <Skeleton
                            className={cls.title}
                            width={300}
                            height={32}
                        />
                        <Skeleton
                            className={cls.skeleton}
                            width={600}
                            height={24}
                        />
                        <Skeleton
                            className={cls.skeleton}
                            width="100%"
                            height={200}
                        />
                        <Skeleton
                            className={cls.skeleton}
                            width="100%"
                            height={200}
                        />
                    </>
                }
                off={
                    <>
                        <SkeletonDeprecated
                            className={cls.avatar}
                            width={200}
                            height={200}
                            border="50%"
                        />
                        <SkeletonDeprecated
                            className={cls.title}
                            width={300}
                            height={32}
                        />
                        <SkeletonDeprecated
                            className={cls.skeleton}
                            width={600}
                            height={24}
                        />
                        <SkeletonDeprecated
                            className={cls.skeleton}
                            width="100%"
                            height={200}
                        />
                        <SkeletonDeprecated
                            className={cls.skeleton}
                            width="100%"
                            height={200}
                        />
                    </>
                }
            />
        );
    } else if (error) {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Text
                        align="center"
                        title={t('Произошла ошибка при загрузке статьи')}
                    />
                }
                off={
                    <TextDeprecated
                        align={TextAlign.CENTER}
                        title={t('Произошла ошибка при загрузке статьи')}
                    />
                }
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Redesigned />}
                off={<Deprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
