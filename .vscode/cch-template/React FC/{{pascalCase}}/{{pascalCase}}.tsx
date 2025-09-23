import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './{{pascalCase}}.module.scss';

interface {{pascalCase}}Props {
    className?: string;
}

export const {{pascalCase}} = ({ className }: {{pascalCase}}Props) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.{{pascalCase}}, {}, [className])}>

        </div>
    );
};