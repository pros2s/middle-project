import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './AboutPage.module.scss';

const AboutPage = memo(() => {
  const { t } = useTranslation('aboutPage');

  return <div className={cls.about}>{t('aboutPageText')}</div>;
});

export default AboutPage;
