import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/article';
import { ArticleTabs } from 'features/articleTabs';
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
    <div className={classNames(cls.FilterArticles, [className])}>
      <SearchArticles />
      <div className={cls.header}>
        <div className={cls.left}>
          <SortArticles />
          <OrderArticles />
        </div>
        <ArticleViewSelector view={view} onChangeView={onChangeView} />
      </div>
      <ArticleTabs />
    </div>
  ),
);
