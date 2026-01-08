import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal as ModalDeprecated } from '@/shared/ui/deprecated/Modal';
import { Modal } from '@/shared/ui/redesigned/Modal';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = () => setIsOpen(false);

    const text = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Text
                    title={t('Добро пожаловать на страницу статей')}
                    text={t(
                        'Здесь вы можете искать и просматривать статьи на различные темы',
                    )}
                />
            }
            off={
                <TextDeprecated
                    title={t('Добро пожаловать на страницу статей')}
                    text={t(
                        'Здесь вы можете искать и просматривать статьи на различные темы',
                    )}
                />
            }
        />
    );

    if (isMobile) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Drawer>{text}</Drawer>}
                off={<DrawerDeprecated>{text}</DrawerDeprecated>}
            />
        );
    }

    return (
        <ToggleFeatures feature='isAppRedesigned'
        on={
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
        } 
        off={
        <ModalDeprecated lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </ModalDeprecated>
        } 
        />
    );
});
