import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsPageSchema } from '../types/ArticleDetailsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getAllComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleComments || commentsAdapter.getInitialState(),
);

const ArticleDetailsPageSlice = createSlice({
  name: 'articleDetailsPage',
  initialState: commentsAdapter.getInitialState<ArticleDetailsPageSchema>({
    entities: {},
    ids: [],
    errorMessage: undefined,
    isLoading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.errorMessage = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, { payload }: PayloadAction<Comment[]>) => {
          state.errorMessage = undefined;
          state.isLoading = false;
          commentsAdapter.setAll(state, payload);
        },
      )
      .addCase(
        fetchCommentsByArticleId.rejected,
        (state, { payload }: PayloadAction<string | undefined>) => {
          state.errorMessage = payload;
          state.isLoading = false;
        },
      );
  },
});

export const { actions: articleDetailsPageActions } = ArticleDetailsPageSlice;
export const { reducer: articleDetailsPageReducer } = ArticleDetailsPageSlice;
