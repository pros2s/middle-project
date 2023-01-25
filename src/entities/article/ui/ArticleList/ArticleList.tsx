import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleItemSceleton } from '../ArticleItem/ArticleItemSceleton';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { Article, ArticleView } from '../../model/types/Article';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const skeletons = (view: ArticleView) =>
  new Array(view === ArticleView.BIG ? 2 : 6).fill(0).map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleItemSceleton key={index} view={view} />
  ));

export const ArticleList = memo(
  ({
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
  }: ArticleListProps) => {
    const renderArticles = (article: Article) => (
      <ArticleItem key={article.id} view={view} article={article} />
    );

    return (
      <div className={classNames(cls.ArticleList, [className, cls[view]])} data-testid='ArticleList'>
        {articles.length ? articles.map(renderArticles) : null}
        {isLoading && skeletons(view)}
      </div>
    );
  },
);
