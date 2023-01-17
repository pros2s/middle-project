import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { Flex } from '@/shared/ui/Stack/Flex';
import { getProfileCanEdit } from '../../model/selectors/getProfileCanEdit/getProfileCanEdit';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/ProfileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';

import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
  className?: string;
  'data-testid'?: string;
}

export const EditableProfileCardHeader = memo(
  ({
    className,
    'data-testid': dataTestId = 'EditableProfileCardHeader',
  }: EditableProfileCardHeaderProps) => {
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
      <header
        className={classNames(cls.EditableProfileCardHeader, [className])}
      >
        <Text title={t('profilePageText')} />
        {canEdit && (
          <div>
            {readOnly ? (
              <Button
                onClick={onEdit}
                theme={ButtonThemes.OUTLINE}
                data-testid={`${dataTestId}.Edit`}
              >
                {t('EditProfile')}
              </Button>
            ) : (
              <Flex>
                <Button
                  className={cls.firstBtn}
                  onClick={onSaveChanges}
                  theme={ButtonThemes.OUTLINE}
                  data-testid={`${dataTestId}.Save`}
                >
                  {t('SaveProfileChanges')}
                </Button>
                <Button
                  onClick={onCancelEdit}
                  theme={ButtonThemes.CANCEL}
                  data-testid={`${dataTestId}.Cancel`}
                >
                  {t('CancelEditProfile')}
                </Button>
              </Flex>
            )}
          </div>
        )}
      </header>
    );
  },
);
