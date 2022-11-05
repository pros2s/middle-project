import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextThemes } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/ProfileSchema';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  errorMessage?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  data?: Profile;
  onChangeName?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  readOnly,
  errorMessage,
  isLoading,
  onChangeName,
  onChangeUsername,
}) => {
  const { t } = useTranslation('profilePage');

  if (errorMessage) {
    return (
      <div className={cls.error}>
        <Text title={t('ProfileError')} theme={TextThemes.ERROR} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={cls.loading}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, [className])}>
      <Input
        value={data?.name}
        placeholder={t('ProfileName')}
        readOnly={readOnly}
        onChange={onChangeName}
      />

      <Input
        value={data?.username}
        placeholder={t('ProfileUsername')}
        readOnly={readOnly}
        onChange={onChangeUsername}
      />
    </div>
  );
};
