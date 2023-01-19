import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  articleActions,
  fetchArticles,
  getArticleSort,
} from '@/pages/articlesPage';
import { ArticleSortFields } from '@/entities/article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { Select, SelectOptions } from '@/shared/ui/Select';

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
