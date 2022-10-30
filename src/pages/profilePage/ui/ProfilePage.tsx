import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage = memo(() => {
  const { t } = useTranslation('profilePage');

  return <div>{t('profilePageText')}</div>;
});

export default ProfilePage;
