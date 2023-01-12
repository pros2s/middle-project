import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ProfileCard } from 'entities/profile';
import { Country } from 'entities/countrySelect';
import { Currency } from 'entities/currencySelect';
import { Text, TextThemes } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/profile/model/types/ProfileSchema';
import { useTranslation } from 'react-i18next';
import { useFetchEffect } from 'shared/lib/hooks/useFetchEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import { getProfileValidateErrros } from '../model/selectors/getProfileValidateErrros/getProfileValidateErrros';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { profileActions, profileReducer } from '../model/slice/ProfileSlice';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const errorMessage = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrros);

  const { t } = useTranslation('profilePage');

  const errorsTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t('INCORRECT_AGE'),
    [ValidateProfileError.INCORRECT_CITY]: t('INCORRECT_CITY'),
    [ValidateProfileError.INCORRECT_DATA]: t('INCORRECT_DATA'),
    [ValidateProfileError.NO_DATA]: t('NO_DATA'),
    [ValidateProfileError.SERVER_ERROR]: t('SERVER_ERROR'),
  };

  useFetchEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

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
      <Page className={cls.profile}>
        <ProfilePageHeader />
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
      </Page>
    </DynamicReducerLoader>
  );
});

export default ProfilePage;
