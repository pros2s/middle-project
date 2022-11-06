import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ProfileCard } from 'entities/profile';
import { getReadOnly } from '../model/selectors/getReadOnly/getReadOnly';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { profileActions, profileReducer } from '../model/slice/ProfileSlice';
import { fetchProfileData } from '../model/services/fetchProfileData';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();
  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const errorMessage = useSelector(getProfileError);
  const readOnly = useSelector(getReadOnly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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

  // const onChangeCountry = useCallback(
  //   (value: Country) => {
  //     dispatch(profileActions.changeProfileData({ country: value }));
  //   },
  //   [dispatch],
  // );

  // const onChangeCurrency = useCallback(
  //   (value: Currency) => {
  //     dispatch(profileActions.changeProfileData({ currency: value }));
  //   },
  //   [dispatch],
  // );

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div className={cls.profile}>
        <ProfilePageHeader />
        <ProfileCard
          data={profileData}
          errorMessage={errorMessage}
          readOnly={readOnly}
          isLoading={isLoading}
          onChangeName={onChangeName}
          onChangeUsername={onChangeUsername}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
        />
      </div>
    </DynamicReducerLoader>
  );
});

export default ProfilePage;
