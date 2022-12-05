import { ArticleList, ArticleView } from 'entities/article';
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
import { FilterArticles } from 'features/filterArticles';
import { useSearchParams } from 'react-router-dom';
import { initArticleState } from '../model/services/initArticleState/initArticleState';
import { fetchArticlesNextPage } from '../model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import {
  getArticleIsLoading,
  getArticleView,
} from '../model/selectors/getArticleState';
import {
  articleActions,
  articleReducer,
  getArticles,
} from '../model/slice/ArticleSlice';

import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  article: articleReducer,
};

const ArticlesPage = memo(() => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticleIsLoading);
  const view = useSelector(getArticleView);

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchArticlesNextPage());
  }, [dispatch]);

  useFetchEffect(() => {
    dispatch(initArticleState(searchParams));
  });

  const onChangeView = useCallback(
    (viewMode: ArticleView) => {
      dispatch(articleActions.setView(viewMode));
    },
    [dispatch],
  );

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(cls.ArticlesPage)}
        onScrollEnd={onLoadNextPage}
      >
        <FilterArticles onChangeView={onChangeView} view={view} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicReducerLoader>
  );
});

export default memo(ArticlesPage);
