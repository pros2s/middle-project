import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/article';
import { ArticleTabs } from '@/features/articleTabs';
import { Flex } from '@/shared/ui/Stack/Flex';
import { SearchArticles } from '../../searchArticles/ui/SearchArticles';
import { OrderArticles } from '../../orderArticles/ui/OrderArticles';
import { SortArticles } from '../../sortArticles/ui/SortArticles';

import cls from './FilterArticles.module.scss';
import { ArticleViewSelector } from '../../articleViewSelector/ArticleViewSelector';

interface FilterArticlesProps {
  className?: string;
  view: ArticleView;
  onChangeView: (view: ArticleView) => void;
}

export const FilterArticles = memo(
  ({ className, onChangeView, view }: FilterArticlesProps) => (
    <Flex direction='column' gap='16' className={classNames('', [className])}>
      <SearchArticles />
      <Flex align='center' justify='between' className={cls.header}>
        <Flex align='center' gap='16' className={cls.left}>
          <SortArticles />
          <OrderArticles />
        </Flex>
        <ArticleViewSelector
          className={cls.right}
          view={view}
          onChangeView={onChangeView}
        />
      </Flex>
      <ArticleTabs />
    </Flex>
  ),
);
