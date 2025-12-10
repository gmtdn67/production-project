import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar'
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
import { ToggleFeatures } from '@/shared/lib/features';

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

    const items = [
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
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    direction="bottom left"
                    className={classNames('', {}, [className])}
                    items={items}
                    trigger={
                        <Avatar
                            src={authData.avatar}
                            size={40}
                        />
                    }
                />
            }
            off={
                <DropdownDeprecated
                    direction="bottom left"
                    className={classNames('', {}, [className])}
                    items={items}
                    trigger={
                        <AvatarDeprecated
                            fallbackInverted
                            src={authData.avatar}
                            size={30}
                        />
                    }
                />
            }
        />
    );
};
