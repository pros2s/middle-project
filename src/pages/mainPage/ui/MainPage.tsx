import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

import cls from './MainPage.module.scss';

const MainPage = memo(() => {
  const { t } = useTranslation('mainPage');

  return <Page className={cls.main}>{t('mainPageText')}</Page>;
});

export default MainPage;
