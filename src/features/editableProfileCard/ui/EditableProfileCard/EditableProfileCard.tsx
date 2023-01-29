import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ProfileCard } from '@/entities/profile';
import { Country } from '@/entities/countrySelect';
import { Currency } from '@/entities/currencySelect';
import { Text, TextThemes } from '@/shared/ui/Text';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useFetchEffect } from '@/shared/lib/hooks/useFetchEffect';
import { Flex } from '@/shared/ui/Stack';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { useGetProfileValidateErrros } from '../../model/selectors/getProfileValidateErrros/getProfileValidateErrros';
import { profileActions, profileReducer } from '../../model/slice/ProfileSlice';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileValidateTranslates } from '../../model/types/editableProfileCardSchema';
import { useUserActions } from '@/entities/user';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo(
  ({ className, id }: EditableProfileCardProps) => {
    const dispatch = useAppDispatch();
    const { setUserAvatar } = useUserActions();

    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const errorMessage = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadonly);
    const validateErrors = useGetProfileValidateErrros();

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
        setUserAvatar(value);
      },
      [dispatch, setUserAvatar],
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
          <EditableProfileCardHeader data-testid='EditableProfileCard.Header' />
          {validateErrors?.length &&
            validateErrors.map((error) => (
              <Text
                key={error}
                text={profileValidateTranslates[error]}
                theme={TextThemes.ERROR}
                data-testid='EditableProfileCard.Error'
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
            data-testid='EditableProfileCard.Card'
          />
        </Flex>
      </DynamicReducerLoader>
    );
  },
);
