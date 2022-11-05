import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { profileActions } from '../../model/slice/ProfileSlice';
import { getReadOnly } from '../../model/selectors/getReadOnly/getReadOnly';

import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation('profilePage');
  const dispatch = useAppDispatch();

  const readOnly = useSelector(getReadOnly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelChangeProfileData());
  }, [dispatch]);

  return (
    <header className={classNames(cls.ProfilePageHeader, [className])}>
      <Text title={t('profilePageText')} />
      {readOnly ? (
        <Button onClick={onEdit} theme={ButtonThemes.OUTLINE}>
          {t('EditProfile')}
        </Button>
      ) : (
        <Button onClick={onCancelEdit} theme={ButtonThemes.OUTLINE}>
          {t('CancelEditProfile')}
        </Button>
      )}
    </header>
  );
};
