import { LoginModal } from 'features/authByUsername';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { getUserAuthData, userActions } from 'entities/user';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const { authData } = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const [isLogInModal, setIsLogInModal] = useState<boolean>(false);

  const onOpenLoginForm = () => {
    setIsLogInModal(true);
  };

  const onCloseLoginForm = () => {
    setIsLogInModal(false);
  };

  const onLogout = () => {
    setIsLogInModal(false);
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, [className])}>
        <nav className={cls.links}>
          <Button theme={ButtonThemes.INVERTED_CLEAR} onClick={onLogout}>
            {t('Logout')}
          </Button>
        </nav>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, [className])}>
      <nav className={cls.links}>
        <Button theme={ButtonThemes.INVERTED_CLEAR} onClick={onOpenLoginForm}>
          {t('LogIn')}
        </Button>
        <LoginModal isOpen={isLogInModal} onClose={onCloseLoginForm} />
      </nav>
    </header>
  );
});
