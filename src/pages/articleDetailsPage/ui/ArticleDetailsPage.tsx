import { FC, memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/article';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextThemes } from 'shared/ui/Text/Text';

import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/comment';
import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useFetchEffect } from 'shared/lib/hooks/useFetchEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddComment } from 'features/addComment';
import { Page } from 'widgets/Page';
import { getIsLoadingFromComments } from '../model/selectors/getFromComments';
import cls from './ArticleDetailsPage.module.scss';
import {
  articleDetailsPageReducer,
  getAllComments,
} from '../model/slice/ArticleDetailsPageSlice';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';

const reducers: ReducersList = {
  articleComments: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC = () => {
  const { t } = useTranslation('articlesPage');

  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getAllComments.selectAll);
  const isLoading = useSelector(getIsLoadingFromComments);

  useFetchEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  if (!id && __PROJECT__ !== 'storybook') {
    return (
      <div className={classNames(cls.ArticleDetailsPage)}>
        <Text
          title={t('IdNotFound')}
          align={TextAlign.CENTER}
          theme={TextThemes.ERROR}
        />
      </div>
    );
  }

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage)}>
        <ArticleDetails id={id} />
        <Text title={t('comments')} />
        <AddComment onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
