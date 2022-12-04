import { articleActions, fetchArticles } from 'pages/articlesPage';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { OrderType } from 'shared/types/order';

import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { getOrderArticles } from '../model/selectors/getOrderArticles';
import {
  orderArticlesActions,
  orderArticlesReducer,
} from '../model/slice/orderArticleSlice';

const reducers: ReducersList = {
  orderArticles: orderArticlesReducer,
};

export const OrderArticles = memo(() => {
  const { t } = useTranslation('articlesPage');
  const dispatch = useAppDispatch();
  const value = useSelector(getOrderArticles);

  const onChange = useCallback(
    (val: OrderType) => {
      dispatch(orderArticlesActions.setOrderArticles(val));
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
    <DynamicReducerLoader reducers={reducers}>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        label={t('orderBy')}
      />
    </DynamicReducerLoader>
  );
});
