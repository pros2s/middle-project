import { memo, MouseEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonThemes } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextThemes } from '@/shared/ui/Text';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const password = useSelector(getLoginPassword);
  const username = useSelector(getLoginUsername);
  const errorMessage = useSelector(getLoginError);
  const isLoading = useSelector(getLoginLoading);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(loginByUsername({ password, username }));
      dispatch(loginActions.setPassword(''));
      dispatch(loginActions.setUsername(''));
    },
    [dispatch, password, username],
  );

  return (
    <DynamicReducerLoader removeAfterUnmount reducers={initialReducers}>
      <form className={classNames(cls.LoginForm, [className])}>
        <Text title={t('Form title')} />
        <Input
          value={username}
          onChange={onChangeUsername}
          isAutoFocus
          placeholder={t('InsertUsername')}
        />
        <Input
          value={password}
          onChange={onChangePassword}
          placeholder={t('InsertPassword')}
        />
        <footer className={cls.footer}>
          <div className={cls.error}>
            {errorMessage && (
              <Text text={errorMessage} theme={TextThemes.ERROR} />
            )}
          </div>
          <Button
            onClick={onLoginClick}
            type='submit'
            theme={ButtonThemes.OUTLINE}
            isDisabled={isLoading}
            className={cls.button}
          >
            {t('LogIn')}
          </Button>
        </footer>
      </form>
    </DynamicReducerLoader>
  );
});

export default LoginForm;
