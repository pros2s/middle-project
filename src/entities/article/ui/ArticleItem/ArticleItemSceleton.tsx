import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/Article';

import cls from './ArticleItem.module.scss';

interface ArticleItemSceletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleItemSceleton = memo(
  ({ className, view }: ArticleItemSceletonProps) => {
    if (view === ArticleView.BIG) {
      return (
        <div className={classNames(cls.ArticleItem, [className, cls[view]])}>
          <Card>
            <header className={cls.header}>
              <Skeleton borderRadius='50%' height='25px' width='25px' />
              <Skeleton className={cls.username} height='25px' width='130px' />
            </header>

            <Skeleton className={cls.title} height='30px' width='100%' />
            <Skeleton height='250px' width='100%' />

            <div className={classNames(cls.footer, [cls.skeleton])}>
              <Skeleton height='20px' width='100px' />
              <Skeleton height='20px' width='80px' />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <section className={classNames(cls.ArticleItem, [className, cls[view]])}>
        <Card>
          <div className={cls.imageInner}>
            <Skeleton height='200px' width='100%' />
          </div>
          <div className={cls.infoInner}>
            <Skeleton height='30px' width='100%' />
          </div>
          <Skeleton height='20px' width='100%' />
        </Card>
      </section>
    );
  },
);
