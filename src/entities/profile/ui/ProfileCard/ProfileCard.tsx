import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/ProfileSchema';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className, data }) => {
  const { t } = useTranslation('profilePage');

  return (
    <div className={classNames(cls.ProfileCard, [className])}>
      <nav className={cls.nav}>
        <Text title={t('profilePageText')} />
        <Button theme={ButtonThemes.OUTLINE}>{t('EditProfile')}</Button>
      </nav>

      <Input value={data?.name} placeholder={t('ProfileName')} />

      <Input value={data?.username} placeholder={t('ProfileUsername')} />
    </div>
  );
};
