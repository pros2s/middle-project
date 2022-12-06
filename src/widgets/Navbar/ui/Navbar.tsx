import { LoginModal } from 'features/authByUsername';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { getUserAuthData, userActions } from 'entities/user';

import { getSidebarCollapsed } from 'widgets/Sidebar';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const { authData } = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const collapsed = useSelector(getSidebarCollapsed);

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

  return (
    <header className={classNames(cls.Navbar, [className])}>
      <AppLink
        to='/articles/create'
        theme={AppLinkTheme.PRIMARY}
        className={classNames(cls.create, [], { [cls.collapsed]: collapsed })}
      >
        {t('createNewArticle')}
      </AppLink>
      <nav className={cls.links}>
        <Button
          theme={ButtonThemes.INVERTED_CLEAR}
          onClick={authData ? onLogout : onOpenLoginForm}
        >
          {authData ? t('Logout') : t('LogIn')}
        </Button>
        {!authData && (
          <LoginModal isOpen={isLogInModal} onClose={onCloseLoginForm} />
        )}
      </nav>
    </header>
  );
});
