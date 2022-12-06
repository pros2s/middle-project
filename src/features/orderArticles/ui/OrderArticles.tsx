import {
  articleActions,
  fetchArticles,
  getArticleOrder,
} from 'pages/articlesPage';

import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { OrderType } from 'shared/types/order';

import { Select, SelectOptions } from 'shared/ui/Select/Select';

export const OrderArticles = memo(() => {
  const { t } = useTranslation('articlesPage');
  const dispatch = useAppDispatch();

  const value = useSelector(getArticleOrder);

  const onChange = useCallback(
    (val: OrderType) => {
      dispatch(articleActions.setOrderArticles(val));
      dispatch(articleActions.setPage(1));
      dispatch(fetchArticles({ replace: true }));
    },
    [dispatch],
  );

  const options = useMemo<SelectOptions<OrderType>[]>(
    () => [
      { val: 'asc', content: t('highest') },
      { val: 'desc', content: t('lowest') },
    ],
    [t],
  );

  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      label={t('orderBy')}
    />
  );
});
