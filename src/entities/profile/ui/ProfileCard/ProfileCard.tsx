import { KeyboardEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Country, CountrySelect } from 'entities/countrySelect';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextThemes } from 'shared/ui/Text/Text';
import { Currency, CurrencySelect } from 'entities/currencySelect';
import { Flex } from 'shared/ui/Stack/Flex';
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
  onChangeCountry?: (value: Country) => void;
  onChangeCurrency?: (value: Currency) => void;
}

export const ProfileCard = memo(
  ({
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
    onChangeCountry,
    onChangeCurrency,
  }: ProfileCardProps) => {
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
        <Flex align='center' justify='center' className={cls.error}>
          <Text title={t('ProfileError')} theme={TextThemes.ERROR} />
        </Flex>
      );
    }

    if (isLoading) {
      return (
        <Flex align='center' justify='center' className={cls.loading}>
          <Loader />
        </Flex>
      );
    }

    return (
      <Flex
        gap='16'
        direction='column'
        align='center'
        className={classNames('', [className])}
      >
        <Avatar
          align='center'
          size='150px'
          src={data?.avatar}
          alt={data?.username}
        />
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

        <CountrySelect
          country={data?.country}
          readOnly={readOnly}
          onChange={onChangeCountry}
        />
        <CurrencySelect
          currency={data?.currency}
          readOnly={readOnly}
          onChange={onChangeCurrency}
        />
      </Flex>
    );
  },
);
