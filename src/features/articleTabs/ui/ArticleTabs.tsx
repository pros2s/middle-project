import { ArticleType } from 'entities/article';
import {
  articleActions,
  fetchArticles,
  getArticleActiveType,
} from 'pages/articlesPage';

import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface ArticleTabsProps {
  className?: string;
}

export const ArticleTabs = memo(({ className }: ArticleTabsProps) => {
  const { t } = useTranslation('articlesPage');
  const dispatch = useAppDispatch();

  const value = useSelector(getArticleActiveType);

  const tabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      { value: ArticleType.ALL, content: t('allArticles') },
      { value: ArticleType.ECONOMICS, content: t('economicsArticles') },
      { value: ArticleType.IT, content: t('itArticles') },
      { value: ArticleType.SCIENCE, content: t('scienceArticles') },
    ],
    [t],
  );

  const onChangeTab = useCallback(
    (type: ArticleType) => {
      dispatch(articleActions.setActiveActiveType(type));
      dispatch(articleActions.setPage(1));
      dispatch(fetchArticles({ replace: true }));
    },
    [dispatch],
  );

  return (
    <Tabs
      className={classNames('', [className])}
      tabs={tabs}
      activeType={value}
      onChangeTab={onChangeTab}
    />
  );
});
