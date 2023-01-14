import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCard } from 'entities/profile';
import { Country } from 'entities/countrySelect';
import { Currency } from 'entities/currencySelect';
import { Text, TextThemes } from 'shared/ui/Text/Text';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useFetchEffect } from 'shared/lib/hooks/useFetchEffect';
import { Flex } from 'shared/ui/Stack/Flex';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrros } from '../../model/selectors/getProfileValidateErrros/getProfileValidateErrros';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { profileActions, profileReducer } from '../../model/slice/ProfileSlice';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo(
  ({ className, id }: EditableProfileCardProps) => {
    const { t } = useTranslation('profilePage');
    const dispatch = useAppDispatch();

    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const errorMessage = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrros);

    useFetchEffect(() => {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    });

    const errorsTranslates = {
      [ValidateProfileError.INCORRECT_AGE]: t('INCORRECT_AGE'),
      [ValidateProfileError.INCORRECT_CITY]: t('INCORRECT_CITY'),
      [ValidateProfileError.INCORRECT_DATA]: t('INCORRECT_DATA'),
      [ValidateProfileError.NO_DATA]: t('NO_DATA'),
      [ValidateProfileError.SERVER_ERROR]: t('SERVER_ERROR'),
    };

    const onChangeName = useCallback(
      (value: string) => {
        dispatch(profileActions.changeProfileData({ name: value }));
      },
      [dispatch],
    );

    const onChangeUsername = useCallback(
      (value: string) => {
        dispatch(profileActions.changeProfileData({ username: value }));
      },
      [dispatch],
    );

    const onChangeAge = useCallback(
      (value: string) => {
        dispatch(profileActions.changeProfileData({ age: Number(value) }));
      },
      [dispatch],
    );

    const onChangeCity = useCallback(
      (value: string) => {
        dispatch(profileActions.changeProfileData({ city: value }));
      },
      [dispatch],
    );

    const onChangeAvatar = useCallback(
      (value: string) => {
        dispatch(profileActions.changeProfileData({ avatar: value }));
      },
      [dispatch],
    );

    const onChangeCountry = useCallback(
      (country: Country) => {
        dispatch(profileActions.changeProfileData({ country }));
      },
      [dispatch],
    );

    const onChangeCurrency = useCallback(
      (currency: Currency) => {
        dispatch(profileActions.changeProfileData({ currency }));
      },
      [dispatch],
    );

    return (
      <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
        <Flex direction='column' className={classNames('', [className])}>
          <EditableProfileCardHeader />
          {validateErrors?.length &&
            validateErrors.map((error) => (
              <Text
                key={error}
                text={errorsTranslates[error]}
                theme={TextThemes.ERROR}
              />
            ))}
          <ProfileCard
            data={profileData}
            errorMessage={errorMessage}
            readOnly={readOnly}
            isLoading={isLoading}
            onChangeName={onChangeName}
            onChangeUsername={onChangeUsername}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
          />
        </Flex>
      </DynamicReducerLoader>
    );
  },
);
