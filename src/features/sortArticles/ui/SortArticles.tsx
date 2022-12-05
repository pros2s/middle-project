import { ArticleSortFields } from 'entities/article';
import { articleActions, fetchArticles } from 'pages/articlesPage';
import { getArticleSort } from 'pages/articlesPage/model/selectors/getArticleState';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { Select, SelectOptions } from 'shared/ui/Select/Select';

export const SortArticles = memo(() => {
  const { t } = useTranslation('articlesPage');
  const dispatch = useAppDispatch();

  const value = useSelector(getArticleSort);

  const onChange = useCallback(
    (val: ArticleSortFields) => {
      dispatch(articleActions.setSortArticles(val));
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
    <Select
      onChange={onChange}
      value={value}
      options={options}
      label={t('sortBy')}
    />
  );
});
