import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  getUserAuthData,
  hasAdminRole,
  hasManagerRole,
  userActions,
} from '@/entities/user';

import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { RoutesPaths } from '@/shared/lib/routes/routes';
import { Dropdown } from '@/shared/ui/Popups';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AvatarLoginBtnActions } from '../../model/slice/AvatarLoginBtnSlice';

interface AvatarLogInBtnProps {
  className?: string;
}

export const AvatarLogInBtn = memo(({ className }: AvatarLogInBtnProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { authData } = useSelector(getUserAuthData);

  const isUserAdmin = useSelector(hasAdminRole);
  const isUserManager = useSelector(hasManagerRole);

  const adminAvailable = isUserAdmin || isUserManager;

  const onOpenLoginForm = () => {
    dispatch(AvatarLoginBtnActions.setIsLogInModal(true));
  };

  const onLogout = () => {
    dispatch(AvatarLoginBtnActions.setIsLogInModal(false));
    dispatch(userActions.logout());
  };

  return (
    <div className={classNames('', [className])}>
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
        <Button theme={ButtonThemes.INVERTED_CLEAR} onClick={onOpenLoginForm}>
          {t('LogIn')}
        </Button>
      )}
    </div>
  );
});
