import { profileReducer } from 'entitties/profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('profilePage');

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div className={cls.profile}>{t('profilePageText')}</div>
    </DynamicReducerLoader>
  );
});

export default ProfilePage;
