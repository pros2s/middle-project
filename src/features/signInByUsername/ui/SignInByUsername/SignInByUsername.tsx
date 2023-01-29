import { memo, MouseEvent, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { v4 as uuidv4 } from 'uuid';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSizes, ButtonThemes } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextAlign, TextThemes } from '@/shared/ui/Text';

import cls from './SignInByUsername.module.scss';
import { useSignInActions } from '../../model/slices/signInByUsernameSlice';
import { useGetPassword } from '../../model/selectors/getPassword/getPassword';
import { useGetProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { Flex } from '@/shared/ui/Stack';
import { Profile, ProfileCard } from '@/entities/profile';
// eslint-disable-next-line pross-plugin/fsd-layer-imports
import {
  useGetProfileValidateErrros,
  profileValidateTranslates,
  useProfileActions,
  profileReducer,
} from '@/features/editableProfileCard';
import { Country } from '@/entities/countrySelect';
import { Currency } from '@/entities/currencySelect';
import { useGetRepeatPassword } from '../../model/selectors/getRepeatPassword/getRepeatPassword';
import {
  useCreateNewProfile,
  useCreateNewUser,
  getUsers,
} from '../../api/signInApi';
import { Loader } from '@/shared/ui/Loader';
import { UserRoles } from '@/entities/user';
import { useGetUserRoles } from '../../model/selectors/getUserRoles/getUserRoles';
import { Popdown } from '@/shared/ui/Popups';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

export interface SignInByUsernameProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const desiredRoles: UserRoles[] = [UserRoles.ADMIN, UserRoles.MANAGER];

const SignInByUsername = memo(({ className }: SignInByUsernameProps) => {
  const { t } = useTranslation();
  const { data: users } = getUsers();
  const [
    createNewUserMutation,
    { isLoading: isCreateNewUserLoading, error: createNewUserErrorMes },
  ] = useCreateNewUser();
  const [
    createNewProfileMutation,
    { isLoading: isCreateNewProfileLoading, error: createNewProfileErrorMes },
  ] = useCreateNewProfile();

  const [isUserExist, setIsUserExist] = useState<boolean>(false);

  const { setValidateErrors } = useProfileActions();
  const {
    isSignInModal,
    setNewPassword,
    setNewProfileData,
    setRepeatPassword,
    addNewRoles,
    removeNewRoles,
    clearRoles,
  } = useSignInActions();

  const validateErrors = useGetProfileValidateErrros();

  const password = useGetPassword();
  const userRoles = useGetUserRoles();
  const repeatPassword = useGetRepeatPassword();
  const profile = useGetProfileData();

  const onChangeUsername = useCallback(
    (value: string) => {
      setNewProfileData({ username: value });
    },
    [setNewProfileData],
  );

  useEffect(() => {
    setIsUserExist(
      Boolean(users?.find((user) => user.username === profile?.username)),
    );
  }, [profile, profile?.username, setValidateErrors, users]);

  const onChangePassword = useCallback(
    (value: string) => {
      setNewPassword(value);
    },
    [setNewPassword],
  );

  const onRepeatPassword = useCallback(
    (value: string) => {
      setRepeatPassword(value);
    },
    [setRepeatPassword],
  );

  const onChangeName = useCallback(
    (value: string) => {
      setNewProfileData({ name: value });
    },
    [setNewProfileData],
  );

  const onChangeAge = useCallback(
    (value: string) => {
      setNewProfileData({ age: Number(value) });
    },
    [setNewProfileData],
  );

  const onChangeCity = useCallback(
    (value: string) => {
      setNewProfileData({ city: value });
    },
    [setNewProfileData],
  );

  const onChangeAvatar = useCallback(
    (value: string) => {
      setNewProfileData({ avatar: value });
    },
    [setNewProfileData],
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      setNewProfileData({ country });
    },
    [setNewProfileData],
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      setNewProfileData({ currency });
    },
    [setNewProfileData],
  );

  const onAddNewRole = useCallback(
    (role: UserRoles) => () => {
      addNewRoles(role);
    },
    [addNewRoles],
  );

  const onRemoveNewRole = useCallback(
    (role: UserRoles) => () => {
      removeNewRoles(role);
    },
    [removeNewRoles],
  );

  const onClearRoles = useCallback(() => {
    clearRoles();
  }, [clearRoles]);

  const onSignInClick = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const {
        age,
        avatar,
        city,
        country,
        currency,
        name,
        username = '',
      }: Profile = profile!;
      const newUserId = uuidv4();

      if (!validateErrors?.length) {
        try {
          createNewUserMutation({
            password,
            username,
            avatar,
            roles: userRoles,
            id: newUserId,
          });
          createNewProfileMutation({
            id: newUserId,
            age,
            name,
            avatar,
            city,
            country,
            currency,
            username,
          });
        } catch (err) {
          throw new Error(err as string);
        }
      }

      isSignInModal(false);
      setNewPassword('');
      setNewProfileData({});
      setRepeatPassword('');
    },
    [
      profile,
      validateErrors?.length,
      isSignInModal,
      setNewPassword,
      setNewProfileData,
      setRepeatPassword,
      createNewUserMutation,
      password,
      userRoles,
      createNewProfileMutation,
    ],
  );

  const isDisabledSignIn =
    repeatPassword !== password ||
    !profile?.username ||
    !password ||
    Boolean(createNewUserErrorMes) ||
    Boolean(createNewProfileErrorMes) ||
    Boolean(validateErrors?.length) ||
    isUserExist;

  const signInButton = (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isCreateNewUserLoading || isCreateNewProfileLoading ? (
        <Loader size='20px' />
      ) : (
        <Button
          onClick={onSignInClick}
          type='submit'
          theme={ButtonThemes.OUTLINE}
          isDisabled={isDisabledSignIn}
          className={cls.button}
        >
          {t('SignIn')}
        </Button>
      )}
    </>
  );

  const popdownTrigger = <Button size={ButtonSizes.S}>{t('roles')}</Button>;
  const isExistRole = useCallback(
    (role: UserRoles) => userRoles.find((userRole) => userRole === role),
    [userRoles],
  );
  return (
    <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
      <form className={classNames(cls.SignInByUsername, [className])}>
        <Text title={t('Registration')} align={TextAlign.CENTER} />
        <Flex direction='column' gap='16'>
          <Input
            value={profile?.username}
            onChange={onChangeUsername}
            isAutoFocus
            placeholder={t('InsertUsername')}
          />
          <Input
            value={password}
            onChange={onChangePassword}
            placeholder={t('InsertPassword')}
          />
          <Input
            value={repeatPassword}
            onChange={onRepeatPassword}
            placeholder={t('repeatPassword')}
          />
          <Popdown trigger={popdownTrigger}>
            <Flex direction='column' align='center' gap='4'>
              {desiredRoles.map((role) => (
                <Flex justify='between'>
                  <Text
                    text={role}
                    theme={TextThemes.PRIMARY}
                    className={classNames(cls.role, [], {
                      [cls.active]: isExistRole(role),
                    })}
                  />
                  {isExistRole(role) ? (
                    <Button
                      onClick={onRemoveNewRole(role)}
                      theme={ButtonThemes.CLEAR}
                      className={cls.roleBtn}
                      size={ButtonSizes.S}
                      // eslint-disable-next-line i18next/no-literal-string
                    >
                      x
                    </Button>
                  ) : (
                    <Button
                      onClick={onAddNewRole(role)}
                      theme={ButtonThemes.CLEAR}
                      className={cls.roleBtn}
                      size={ButtonSizes.S}
                    >
                      +
                    </Button>
                  )}
                </Flex>
              ))}
              <Button
                className={cls.nothingBtn}
                fullWidth
                onClick={onClearRoles}
                theme={ButtonThemes.CLEAR}
              >
                {t('Nothing')}
              </Button>
            </Flex>
          </Popdown>

          <ProfileCard
            data={profile}
            errorMessage={JSON.stringify(createNewProfileErrorMes)}
            isLoading={isCreateNewProfileLoading}
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
        <footer className={cls.footer}>
          <div className={cls.error}>
            {isUserExist && (
              <Text text={t('userExists')} theme={TextThemes.ERROR} />
            )}
            {createNewProfileErrorMes && (
              <Text
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                text={JSON.stringify(createNewProfileErrorMes?.data?.message)}
                theme={TextThemes.ERROR}
              />
            )}
            {createNewUserErrorMes && (
              <Text
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                text={JSON.stringify(createNewUserErrorMes?.data?.message)}
                theme={TextThemes.ERROR}
              />
            )}
            {repeatPassword !== password && (
              <Text text={t('passwordsNotEqual')} theme={TextThemes.ERROR} />
            )}
            {Boolean(validateErrors?.length) &&
              validateErrors?.map((error) => (
                <Text
                  key={error}
                  text={profileValidateTranslates[error]}
                  theme={TextThemes.ERROR}
                  data-testid='EditableProfileCard.Error'
                />
              ))}
          </div>
          {signInButton}
        </footer>
      </form>
    </DynamicReducerLoader>
  );
});

export default SignInByUsername;
