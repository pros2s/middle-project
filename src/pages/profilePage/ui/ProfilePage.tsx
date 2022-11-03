import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextThemes } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/profile';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { profileReducer } from '../model/slice/ProfileSlice';
import { fetchProfileData } from '../model/services/fetchProfileData';

import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const errorMessage = useSelector(getProfileError);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div className={cls.profile}>
        {errorMessage && <Text text={errorMessage} theme={TextThemes.ERROR} />}
        {isLoading && <Loader size='30px' />}
        <ProfileCard data={data} />
      </div>
    </DynamicReducerLoader>
  );
});

export default ProfilePage;
