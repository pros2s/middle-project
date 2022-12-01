import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from 'entities/article';
import { memo, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useFetchEffect } from 'shared/lib/hooks/useFetchEffect';
import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { Page } from 'widgets/Page';
import {
  getArticleIsLoading,
  getArticleView,
} from '../model/selectors/getArticleState';
import {
  articleActions,
  articleReducer,
  getArticles,
} from '../model/slice/ArticleSlice';
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
    dispatch(articleActions.initView());
    dispatch(fetchArticles({ page: 1 }));
  });

  const onChangeView = useCallback(
    (viewMode: ArticleView) => {
      dispatch(articleActions.setView(viewMode));
    },
    [dispatch],
  );

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page className={classNames(cls.ArticlesPage)}>
        <ArticleViewSelector view={view} onChangeView={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicReducerLoader>
  );
});

export default memo(ArticlesPage);
