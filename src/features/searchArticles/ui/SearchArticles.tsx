import {
  articleActions,
  fetchArticles,
  getArticleSearch,
} from '@/pages/articlesPage';

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';

export const SearchArticles = memo(() => {
  const { t } = useTranslation('articlesPage');
  const dispatch = useAppDispatch();

  const value = useSelector(getArticleSearch);

  const debouncedSearch = useDebounce(() => {
    dispatch(fetchArticles({ replace: true }));
  }, 500);

  const onChange = useCallback(
    (val: string) => {
      dispatch(articleActions.setSearchArticles(val));
      dispatch(articleActions.setPage(1));
      debouncedSearch();
    },
    [debouncedSearch, dispatch],
  );

  return (
    <Card>
      <Input
        isAutoFocus
        value={value}
        onChange={onChange}
        placeholder={t('searchArticle')}
      />
    </Card>
  );
});
