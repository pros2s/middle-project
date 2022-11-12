import { memo, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextThemes } from 'shared/ui/Text/Text';
import {
  getArticleLoading,
  // getArticleData,
  getArticleErrorMessage,
} from '../../model/selectors/getArticleState';
import { fetchArticleData } from '../../model/services/fetchArticleData';
import { articleDetailsReducer } from '../../model/slice/ArticleSlice';

import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('articlesPage');

  const isLoading = useSelector(getArticleLoading);
  const errorMessage = useSelector(getArticleErrorMessage);
  // const data = useSelector(getArticleData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleData(id));
  }, [dispatch, id]);

  let content: ReactNode;
  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          borderRadius='50%'
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width='100%' height={200} />
        <Skeleton className={cls.skeleton} width='100%' height={200} />
      </>
    );
  } else if (errorMessage) {
    content = <Text text={errorMessage} theme={TextThemes.ERROR} />;
  } else {
    content = t('ArticleDetailsPageText');
  }

  return (
    <DynamicReducerLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(cls.ArticleDetails, [className])}>
        {content}
      </div>
    </DynamicReducerLoader>
  );
});
