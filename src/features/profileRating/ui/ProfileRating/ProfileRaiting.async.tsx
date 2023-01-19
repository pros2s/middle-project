import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ProfileRaitingProps } from './ProfileRating';

const ProfileRaitingLazy = lazy(() => import('./ProfileRating'));

export const ProfileRaitingAsync = (props: ProfileRaitingProps) => (
  <Suspense fallback={<Skeleton width='100%' height='140px' />}>
    <ProfileRaitingLazy {...props} />
  </Suspense>
);
