import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import {
    getRouteAdminPanel,
    getRouteProfile,
} from '@/shared/config/routeConfig/routeConfig';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction="bottom left"
            className={classNames('', {}, [className])}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Панель администратора'),
                              href: getRouteAdminPanel(),
                          },
                      ]
                    : []),

                {
                    content: t('Профиль пользователя'),
                    href: getRouteProfile(authData.id),
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={
                <Avatar fallbackInverted src={authData.avatar} size={30} />
            }
        />
    );
};
