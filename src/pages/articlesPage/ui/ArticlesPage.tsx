import { ArticleList } from 'entities/article';
import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useFetchEffect } from 'shared/lib/hooks/useFetchEffect';
import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import {
  getArticleIsLoading,
  getArticleView,
} from '../model/selectors/getArticleState';
import { articleReducer, getArticles } from '../model/slice/ArticleSlice';
import { fetchArticles } from '../model/services/fetchArticles';

import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  article: articleReducer,
};

const ArticlesPage = memo(() => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticleIsLoading);
  const view = useSelector(getArticleView);

  useFetchEffect(() => {
    dispatch(fetchArticles());
  });

  return (
    <DynamicReducerLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage)}>
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicReducerLoader>
  );
});

export default memo(ArticlesPage);
