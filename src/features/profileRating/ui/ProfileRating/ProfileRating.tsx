import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { RatingCard } from '@/entities/Rating';
import {
    useGetProfileRating,
    useRateProfile,
} from '../../api/profileRatingApi';
import { getUserAuthData } from '@/entities/User';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation('profile');
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetProfileRating({ profileId });
    const [rateProfileMutaion] = useRateProfile();
    const rating = data?.[0];

    const onAccept = useCallback(
        (starsCount: number) => {
            try {
                rateProfileMutaion({
                    userId: userData?.id ?? '',
                    profileId,
                    rate: starsCount,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [rateProfileMutaion, profileId, userData?.id],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={140} />;
    }
    if (userData?.id !== profileId) {
        return (
            <RatingCard
                className={className}
                title={t('Оцените пользователя')}
                hasFeedback={false}
                rate={rating?.rate}
                onAccept={onAccept}
            />
        );
    }

    return null;
});
