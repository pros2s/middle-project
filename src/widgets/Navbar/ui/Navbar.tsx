import { LoginModal } from 'features/authByUsername';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import {
  getUserAuthData,
  hasAdminRole,
  hasManagerRole,
  userActions,
} from 'entities/user';

import { getSidebarCollapsed } from 'widgets/Sidebar';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { RoutesPaths } from 'shared/lib/routes/routes';
import { Flex } from 'shared/ui/Stack/Flex';
import { SVGIcon } from 'shared/ui/SVGIcon/SVGIcon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Dropdown, Popdown } from 'shared/ui/Popups';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { authData } = useSelector(getUserAuthData);
  const collapsed = useSelector(getSidebarCollapsed);

  const isUserAdmin = useSelector(hasAdminRole);
  const isUserManager = useSelector(hasManagerRole);

  const adminAvailable = isUserAdmin || isUserManager;

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
        <Flex gap='16' align='center'>
          <Popdown trigger={<SVGIcon Svg={NotificationIcon} invertedColor />} />
          {authData ? (
            <Dropdown
              trigger={
                <Avatar
                  size='40px'
                  src={authData.avatar}
                  align='center'
                  alt={authData.username}
                />
              }
              items={[
                ...(adminAvailable
                  ? [
                      {
                        content: t('Admin'),
                        href: RoutesPaths.admin_panel,
                      },
                    ]
                  : []),
                {
                  content: t('Profile'),
                  href: RoutesPaths.profile + authData.id,
                },
                { content: t('Logout'), onclick: onLogout },
              ]}
            />
          ) : (
            <Button
              theme={ButtonThemes.INVERTED_CLEAR}
              onClick={onOpenLoginForm}
            >
              {t('LogIn')}
            </Button>
          )}
        </Flex>

        {!authData && (
          <LoginModal isOpen={isLogInModal} onClose={onCloseLoginForm} />
        )}
      </nav>
    </header>
  );
});
