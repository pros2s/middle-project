import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticlesPage.module.scss';

const ArticlesPage: FC = () => {
  const { t } = useTranslation('articlesPage');

  return (
    <div className={classNames(cls.ArticlesPage)}>{t('articlesPageText')}</div>
  );
};

export default memo(ArticlesPage);
