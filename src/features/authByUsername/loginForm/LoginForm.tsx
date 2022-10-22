import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <form className={classNames(cls.LoginForm, [className])}>
      <Input isAutoFocus placeholder={t('InsertUsername')} />
      <Input placeholder={t('InsertPassword')} />
      <Button theme={ButtonThemes.OUTLINE} className={cls.button}>
        {t('LogIn')}
      </Button>
    </form>
  );
};
