import { FC, KeyboardEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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
  onChangeAvatar?: (value: string) => void;
  // onChangeCountry?: (value: string) => void;
  // onChangeCurrency?: (value: string) => void;
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
  onChangeAvatar,
  // onChangeCountry,
  // onChangeCurrency,
}) => {
  const { t } = useTranslation('profilePage');

  // const countryOptions = useMemo(
  //   () =>
  //     Object.entries(Country).map((val) => ({
  //       value: val[0],
  //       content: val[1],
  //     })),
  //   [],
  // );

  // const currencyOptions = useMemo(
  //   () =>
  //     Object.entries(Currency).map((val) => ({
  //       value: val[0],
  //       content: val[1],
  //     })),
  //   [],
  // );

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
      <Avatar size='150px' src={data?.avatar} alt={data?.username} />
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
        onKeyPress={ageInputChange}
      />

      <Input
        value={data?.city}
        placeholder={t('ProfileCity')}
        readOnly={readOnly}
        onChange={onChangeCity}
      />

      <Input
        value={data?.avatar}
        placeholder={t('ProfileAvatar')}
        readOnly={readOnly}
        onChange={onChangeAvatar}
      />

      {/* <CounrySelect
        label={t('ProfileCountry')}
        readOnly={readOnly}
        options={countryOptions}
        onChange={onChangeCountry}
      />
      <CurrencySelect
        label={t('ProfileCurrency')}
        readOnly={readOnly}
        options={currencyOptions}
        onChange={onChangeCurrency}
      /> */}
    </div>
  );
};
