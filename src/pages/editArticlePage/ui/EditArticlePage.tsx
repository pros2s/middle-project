import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './EditArticlePage.module.scss';

interface EditArticlePageProps {
  className?: string;
}

const EditArticlePage = memo(({ className }: EditArticlePageProps) => {
  const { t } = useTranslation('editArticlePage');

  return (
    <Page className={classNames(cls.EditArticlePage, [className])}>
      {t('editArticlePage')}
    </Page>
  );
});

export default EditArticlePage;
