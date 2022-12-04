import { articleActions, fetchArticles } from 'pages/articlesPage';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { getSearchArticles } from '../model/selectors/getSearchArticles';
import {
  searchArticlesActions,
  searchArticlesReducer,
} from '../model/slice/searchArticlesSlice';

const reducers: ReducersList = {
  searchArticles: searchArticlesReducer,
};

export const SearchArticles = memo(() => {
  const { t } = useTranslation('articlesPage');
  const dispatch = useAppDispatch();

  const value = useSelector(getSearchArticles);

  const onChange = useCallback(
    (val: string) => {
      dispatch(searchArticlesActions.setSearchArticles(val));
      dispatch(articleActions.setPage(1));
      dispatch(fetchArticles({ replace: true }));
    },
    [dispatch],
  );

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Card>
        <Input
          isAutoFocus
          value={value}
          onChange={onChange}
          placeholder={t('searchArticle')}
        />
      </Card>
    </DynamicReducerLoader>
  );
});
