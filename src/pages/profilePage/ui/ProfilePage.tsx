import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage: FC = () => {
  const { t } = useTranslation('profilePage');

  return <div>{t('profilePageText')}</div>;
};

export default ProfilePage;
