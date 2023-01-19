import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { Card } from '@/shared/ui/Card';
import { RaitingCard } from '@/entities/raiting';
import { useProfileRaiting, useRateProfile } from '../../api/profileRatingApi';
import { getUserAuthData } from '@/entities/user';
import { Skeleton } from '@/shared/ui/Skeleton';

import cls from './ProfileRaiting.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface ProfileRaitingProps {
  className?: string;
  profileId: string;
}

const ProfileRaiting = memo(({ className, profileId }: ProfileRaitingProps) => {
  const { t } = useTranslation('profilePage');
  const { authData } = useSelector(getUserAuthData);

  const { isLoading, data } = useProfileRaiting({
    profileId,
    userId: authData?.id ?? '',
  });
  const [rateProfileMutation] = useRateProfile();

  const rateProfileHandler = useCallback(
    (star: number, feedback?: string) => {
      try {
        rateProfileMutation({
          profileId,
          rate: star,
          userId: authData?.id ?? '',
          feedback,
        });
      } catch (e) {
        throw new Error(e as string);
      }
    },
    [rateProfileMutation, profileId, authData?.id],
  );

  const onAccept = useCallback(
    (star: number, feedback?: string) => {
      rateProfileHandler(star, feedback);
    },
    [rateProfileHandler],
  );

  const onCancel = useCallback(
    (star: number) => {
      rateProfileHandler(star);
    },
    [rateProfileHandler],
  );

  if (isLoading) return <Skeleton width='100%' height='140px' />;

  return (
    <Card className={classNames(cls.ProfileRating, [className])}>
      <RaitingCard
        title={t('rateProfile')}
        feedbackTitle={t('feedbackTitle')}
        hasFeedback
        rate={data?.[0]?.rate}
        onAccept={onAccept}
        onCancel={onCancel}
      />
    </Card>
  );
});

export default ProfileRaiting;
