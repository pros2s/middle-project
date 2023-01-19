import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Text, TextThemes } from '@/shared/ui/Text';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation('ForbiddenPage');

  return (
    <Page className={classNames('', [className])}>
      <Text title={t('forbiddenPage')} theme={TextThemes.ERROR} />
    </Page>
  );
});

export default ForbiddenPage;
