import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
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

    if (isLoading) {
      return (
        <div className={classNames(cls.ArticleList, [className, cls[view]])}>
          {new Array(view === ArticleView.BIG ? 3 : 9)
            .fill(0)
            .map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ArticleItemSceleton key={index} view={view} />
            ))}
        </div>
      );
    }

    return (
      <div className={classNames(cls.ArticleList, [className, cls[view]])}>
        {articles.length ? articles.map(renderArticles) : null}
      </div>
    );
  },
);
