import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = () => {
  const { t } = useTranslation('articlesPage');

  return (
    <div className={classNames(cls.ArticleDetailsPage)}>
      {t('ArticleDetailsPageText')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
