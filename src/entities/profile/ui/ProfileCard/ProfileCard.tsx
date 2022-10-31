import { getProfileData } from 'entities/profile/model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from 'entities/profile/model/selectors/getProfileLoading/getProfileLoading';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text/Text';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profilePage');
  const { data } = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);

  return (
    <div className={classNames(cls.ProfileCard, [className])}>
      <header className={cls.header}>
        <Text title={t('profilePageText')} />
        {isLoading && <Loader size='30px' />}
        <Button theme={ButtonThemes.OUTLINE}>{t('EditProfile')}</Button>
      </header>

      <Input value={data?.name} placeholder={t('ProfileName')} />

      <Input value={data?.username} placeholder={t('ProfileUsername')} />
    </div>
  );
};
