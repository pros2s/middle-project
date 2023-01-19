import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/authByUsername';

import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/user';

import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Flex } from '@/shared/ui/Stack';
import { NotificationBtn } from '@/features/notificationBtn';
import {
  AvatarLogInBtn,
  AvatarLoginBtnActions,
  getAvatarLoginBtn,
} from '@/features/avatarLogInBtn';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { authData } = useSelector(getUserAuthData);

  const isLogInModal = useSelector(getAvatarLoginBtn);

  const onCloseLoginForm = () => {
    dispatch(AvatarLoginBtnActions.setIsLogInModal(false));
  };

  return (
    <header className={classNames(cls.Navbar, [className])}>
      <AppLink
        to='/articles/create'
        theme={AppLinkTheme.PRIMARY}
        className={cls.create}
      >
        {t('createNewArticle')}
      </AppLink>
      <nav className={cls.links}>
        <Flex gap='16' align='center'>
          {authData && <NotificationBtn />}
          <AvatarLogInBtn />
        </Flex>

        {!authData && (
          <LoginModal isOpen={isLogInModal} onClose={onCloseLoginForm} />
        )}
      </nav>
    </header>
  );
});
