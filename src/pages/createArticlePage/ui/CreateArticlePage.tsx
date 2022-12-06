import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './CreateArticlePage.module.scss';

interface CreateArticlePageProps {
  className?: string;
}

const CreateArticlePage = memo(({ className }: CreateArticlePageProps) => {
  const { t } = useTranslation('createArticlePage');

  return (
    <Page className={classNames(cls.CreateArticlePage, [className])}>
      {t('createArticlePage')}
    </Page>
  );
});

export default CreateArticlePage;
