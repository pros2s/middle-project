import { getProfileData } from 'entities/profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/profile/model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from 'entities/profile/model/selectors/getProfileLoading/getProfileLoading';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextThemes } from 'shared/ui/Text/Text';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profilePage');
  const { data } = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const errorMessage = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, [className])}>
      <nav className={cls.nav}>
        <header className={cls.header}>
          <Text title={t('profilePageText')} />
          <div className={cls.error}>
            {errorMessage && (
              <Text text={errorMessage} theme={TextThemes.ERROR} />
            )}
          </div>
          {isLoading && <Loader size='30px' />}
        </header>
        <Button theme={ButtonThemes.OUTLINE}>{t('EditProfile')}</Button>
      </nav>

      <Input value={data?.name} placeholder={t('ProfileName')} />

      <Input value={data?.username} placeholder={t('ProfileUsername')} />
    </div>
  );
};
