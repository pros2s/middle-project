import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ArticleRaitingProps } from './ArticleRaiting';

const ArticleRaitingLazy = lazy(() => import('./ArticleRaiting'));

export const ArticleRaitingAsync = (props: ArticleRaitingProps) => (
  <Suspense fallback={<Skeleton width='100%' height='140px' />}>
    <ArticleRaitingLazy {...props} />
  </Suspense>
);
