import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { Card } from '@/shared/ui/Card';
import { RaitingCard } from '@/entities/raiting';
import { useArticleRaiting, useRateArticle } from '../../api/articleRaitingApi';
import { getUserAuthData } from '@/entities/user';
import { Skeleton } from '@/shared/ui/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArticleRating.module.scss';

export interface ArticleRaitingProps {
  className?: string;
  articleId: string;
}

const ArticleRaiting = memo(({ className, articleId }: ArticleRaitingProps) => {
  const { t } = useTranslation('articlesPage');
  const { authData } = useSelector(getUserAuthData);

  const { isLoading, data } = useArticleRaiting({
    articleId,
    userId: authData?.id ?? '',
  });
  const [rateArticleMutation] = useRateArticle();

  const rateArticleHandler = useCallback(
    (star: number, feedback?: string) => {
      try {
        rateArticleMutation({
          articleId,
          rate: star,
          userId: authData?.id ?? '',
          feedback,
        });
      } catch (e) {
        throw new Error(e as string);
      }
    },
    [articleId, authData?.id, rateArticleMutation],
  );

  const onAccept = useCallback(
    (star: number, feedback?: string) => {
      rateArticleHandler(star, feedback);
    },
    [rateArticleHandler],
  );

  const onCancel = useCallback(
    (star: number) => {
      rateArticleHandler(star);
    },
    [rateArticleHandler],
  );

  if (isLoading) return <Skeleton width='100%' height='140px' />;

  return (
    <Card
      className={classNames(cls.ArticleRating, [className])}
      data-testid='ArticleRaiting'
    >
      <RaitingCard
        title={t('rateArticle')}
        feedbackTitle={t('feedbackTitle')}
        hasFeedback
        rate={data?.[0]?.rate}
        onAccept={onAccept}
        onCancel={onCancel}
      />
    </Card>
  );
});

export default ArticleRaiting;
