import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileCanEdit } from '../../model/selectors/getProfileCanEdit/getProfileCanEdit';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/ProfileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';

import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation('profilePage');
  const dispatch = useAppDispatch();

  const readOnly = useSelector(getProfileReadonly);
  const canEdit = useSelector(getProfileCanEdit);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelChangeProfileData());
  }, [dispatch]);

  const onSaveChanges = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <header className={classNames(cls.ProfilePageHeader, [className])}>
      <Text title={t('profilePageText')} />
      {canEdit && (
        <div>
          {readOnly ? (
            <Button onClick={onEdit} theme={ButtonThemes.OUTLINE}>
              {t('EditProfile')}
            </Button>
          ) : (
            <div className={cls.buttons}>
              <Button onClick={onSaveChanges} theme={ButtonThemes.OUTLINE}>
                {t('SaveProfileChanges')}
              </Button>
              <Button onClick={onCancelEdit} theme={ButtonThemes.CANCEL}>
                {t('CancelEditProfile')}
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
