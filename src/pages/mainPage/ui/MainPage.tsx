import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './MainPage.module.scss';

const MainPage = memo(() => {
  const { t } = useTranslation('mainPage');

  return <div className={cls.main}>{t('mainPageText')}</div>;
});

export default MainPage;
