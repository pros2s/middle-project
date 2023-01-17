import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

import cls from './AboutPage.module.scss';

const AboutPage = memo(() => {
  const { t } = useTranslation('aboutPage');

  return <Page className={cls.about}>{t('aboutPageText')}</Page>;
});

export default AboutPage;
