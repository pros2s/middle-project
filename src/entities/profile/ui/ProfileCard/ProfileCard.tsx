import { FC, KeyboardEvent, useCallback } from 'react';
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
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  // onChangeCountry?: (value: Country) => void;
  // onChangeCurrency?: (value: Currency) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  readOnly,
  errorMessage,
  isLoading,
  onChangeName,
  onChangeUsername,
  onChangeAge,
  onChangeCity,
  // onChangeCountry,
  // onChangeCurrency,
}) => {
  const { t } = useTranslation('profilePage');

  const ageInputChange = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    },
    [],
  );

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

      <Input
        value={data?.age}
        placeholder={t('ProfileAge')}
        readOnly={readOnly}
        onChange={onChangeAge}
        onKeyPress={(e) => ageInputChange(e)}
      />

      <Input
        value={data?.city}
        placeholder={t('ProfileCity')}
        readOnly={readOnly}
        onChange={onChangeCity}
      />
      {/* <Input
        value={data?.country}
        placeholder={t('ProfileCountry')}
        readOnly={readOnly}
        onChange={onChangeCountry}
      />

      <Input
        value={data?.currency}
        placeholder={t('ProfileCurrency')}
        readOnly={readOnly}
        onChange={onChangeCurrency}
      /> */}
    </div>
  );
};
