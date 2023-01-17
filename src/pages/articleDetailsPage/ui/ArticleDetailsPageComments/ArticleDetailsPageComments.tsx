import { memo, useCallback } from 'react';
import { CommentList } from '@/entities/comment';
import { useSelector } from 'react-redux';
import {
  ReducersList,
  DynamicReducerLoader,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useFetchEffect } from '@/shared/lib/hooks/useFetchEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AddComment } from '@/features/addComment';
import { getIsLoadingFromComments } from '../../model/selectors/getFromComments';
import {
  articleDetailsPageReducer,
  getAllComments,
} from '../../model/slice/ArticleDetailsPageSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageCommentsProps {
  id?: string;
}

const reducers: ReducersList = {
  articleComments: articleDetailsPageReducer,
};

export const ArticleDetailsPageComments = memo(
  ({ id }: ArticleDetailsPageCommentsProps) => {
    const dispatch = useAppDispatch();
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

    return (
      <DynamicReducerLoader reducers={reducers}>
        <AddComment onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </DynamicReducerLoader>
    );
  },
);
