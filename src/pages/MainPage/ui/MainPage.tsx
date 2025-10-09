import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <HStack>
                <div>text 1</div>
                <ListBox
                    defaultValue="Выберите значение"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: 'abc', disabled: true },
                        { value: '13', content: 'bbb' },
                    ]}
                />
            </HStack>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </Page>
    );
};

export default MainPage;
