import { ArticleSortFields } from 'entities/article';
import { articleActions, fetchArticles } from 'pages/articlesPage';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { getSortArticles } from '../model/selectors/getSortArticles';
import {
  sortArticlesActions,
  sortArticlesReducer,
} from '../model/slice/sortArticlesSlice';

const reducers: ReducersList = {
  sortArticles: sortArticlesReducer,
};

export const SortArticles = memo(() => {
  const { t } = useTranslation('articlesPage');
  const dispatch = useAppDispatch();
  const value = useSelector(getSortArticles);

  const onChange = useCallback(
    (val: ArticleSortFields) => {
      dispatch(sortArticlesActions.setSortArticles(val));
      dispatch(articleActions.setPage(1));
      dispatch(fetchArticles({ replace: true }));
    },
    [dispatch],
  );

  const options = useMemo<SelectOptions<ArticleSortFields>[]>(
    () => [
      { val: ArticleSortFields.CREATEDAT, content: t('createdAt') },
      { val: ArticleSortFields.TITLE, content: t('title') },
      { val: ArticleSortFields.VIEWS, content: t('views') },
    ],
    [t],
  );

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Select
        onChange={onChange}
        value={value}
        options={options}
        label={t('sortBy')}
      />
    </DynamicReducerLoader>
  );
});
