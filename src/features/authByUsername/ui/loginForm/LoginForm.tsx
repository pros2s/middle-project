import { FC, MouseEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { loginByUsername } from 'features/authByUsername/model/services/loginByUsername/loginByUsername';
import { getLoginError } from 'features/authByUsername/model/selectors/getLoginError/getLoginError';
import { loginActions } from '../../model/slice/LoginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const password = useSelector(getLoginPassword);
  const username = useSelector(getLoginUsername);
  const errorMessage = useSelector(getLoginError);

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
    },
    [dispatch, password, username],
  );

  return (
    <form className={classNames(cls.LoginForm, [className])}>
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
        {errorMessage && <p className={cls.error}>{errorMessage}</p>}
        <Button
          onClick={onLoginClick}
          type='submit'
          theme={ButtonThemes.OUTLINE}
          className={cls.button}
        >
          {t('LogIn')}
        </Button>
      </footer>
    </form>
  );
};
