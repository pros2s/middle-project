import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/authByUsername';

import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/user';

import { Flex } from '@/shared/ui/Stack';
import { NotificationBtn } from '@/features/notificationBtn';
import {
  AvatarLogInBtn,
  AvatarLoginBtnActions,
  getAvatarLoginBtn,
} from '@/features/avatarLogInBtn';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import cls from './Navbar.module.scss';
import { Button, ButtonThemes } from '@/shared/ui/Button';
import {
  useSignInActions,
  SignInModal,
  useGetIsOpenSignInModal,
} from '@/features/signInByUsername';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isSignInModal } = useSignInActions();

  const isOpenSignIn = useGetIsOpenSignInModal();

  const { authData } = useSelector(getUserAuthData);

  const isLogInModal = useSelector(getAvatarLoginBtn);

  const onOpenSignInForm = () => {
    isSignInModal(true);
  };

  const onCloseSignInForm = () => {
    isSignInModal(false);
  };

  const onCloseLoginForm = () => {
    dispatch(AvatarLoginBtnActions.setIsLogInModal(false));
  };

  return (
    <header className={classNames(cls.Navbar, [className])}>
      <nav className={cls.links}>
        <Flex gap='16' align='center'>
          {authData && <NotificationBtn />}
          <AvatarLogInBtn />
          {!authData && (
            <Button
              theme={ButtonThemes.INVERTED_CLEAR}
              onClick={onOpenSignInForm}
            >
              {t('SignIn')}
            </Button>
          )}
        </Flex>

        {!authData && (
          <>
            <LoginModal isOpen={isLogInModal} onClose={onCloseLoginForm} />
            <SignInModal
              isOpen={Boolean(isOpenSignIn)}
              onClose={onCloseSignInForm}
            />
          </>
        )}
      </nav>
    </header>
  );
});
