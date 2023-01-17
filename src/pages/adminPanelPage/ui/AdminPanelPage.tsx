import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo(({ className }: AdminPanelPageProps) => {
  const { t } = useTranslation('adminPanelPage');

  return <Page className={classNames('', [className])}>{t('adminPanel')}</Page>;
});

export default AdminPanelPage;
