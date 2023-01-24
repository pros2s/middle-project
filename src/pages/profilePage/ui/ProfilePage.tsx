import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Text, TextThemes } from '@/shared/ui/Text';

import cls from './ProfilePage.module.scss';
import { ProfileRaiting } from '@/features/profileRating';

const ProfilePage = memo(() => {
  const { t } = useTranslation('profilePage');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text title={t('ProfileNotFound')} theme={TextThemes.ERROR} />;
  }

  return (
    <Page className={cls.profile} data-testid='profilePage'>
      <EditableProfileCard id={id} />
      <ProfileRaiting profileId={id} />
    </Page>
  );
});

export default ProfilePage;
