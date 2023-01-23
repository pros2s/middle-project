import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Flex } from '@/shared/ui/Stack';
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
            <Flex direction='column' gap='8'>
              <header>
                <Flex align='center'>
                  <Skeleton borderRadius='50%' height='35px' width='35px' />
                  <Skeleton
                    className={cls.username}
                    height='25px'
                    width='130px'
                  />
                </Flex>
              </header>

              <Skeleton className={cls.title} height='30px' width='100%' />
              <Skeleton height='250px' width='100%' />

              <div className={classNames('', [cls.skeleton])}>
                <Flex gap='8' align='center'>
                  <Skeleton height='20px' width='100px' />
                  <Skeleton height='20px' width='80px' />
                </Flex>
              </div>
            </Flex>
          </Card>
        </div>
      );
    }

    return (
      <section className={classNames(cls.ArticleItem, [className, cls[view]])}>
        <Card>
          <Flex direction='column' gap='16'>
            <Skeleton className={cls.imageInner} height='200px' width='100%' />
            <Flex justify='between'>
              <Skeleton height='20px' width='60%' />
              <Skeleton height='20px' width='30%' />
            </Flex>
            <Skeleton height='20px' width='60%' />
          </Flex>
        </Card>
      </section>
    );
  },
);
