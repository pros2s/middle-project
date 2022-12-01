import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/article';
import { LOCALE_STORAGE_VIEW_MODE } from 'shared/consts/localeStorage';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import { ArticleSchema } from '../types/ArticleSchema';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.article || articlesAdapter.getInitialState(),
);

const ArticleSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<ArticleSchema>({
    entities: {},
    ids: [],
    errorMessage: undefined,
    isLoading: false,
    view: ArticleView.SMALL,
    hasMore: true,
    page: 1,
  }),
  reducers: {
    setView(state, { payload }: PayloadAction<ArticleView>) {
      state.view = payload;
      localStorage.setItem(LOCALE_STORAGE_VIEW_MODE, payload);
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
    initView(state) {
      const view = localStorage.getItem(
        LOCALE_STORAGE_VIEW_MODE,
      ) as ArticleView;

      state.view = view;
      state.limit = view === ArticleView.BIG ? 2 : 6;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.errorMessage = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticles.fulfilled,
        (state, { payload }: PayloadAction<Article[]>) => {
          state.errorMessage = undefined;
          state.isLoading = false;
          articlesAdapter.addMany(state, payload);
          state.hasMore = payload.length > 0;
        },
      )
      .addCase(
        fetchArticles.rejected,
        (state, { payload }: PayloadAction<string | undefined>) => {
          state.errorMessage = payload;
          state.isLoading = false;
        },
      );
  },
});

export const { actions: articleActions } = ArticleSlice;
export const { reducer: articleReducer } = ArticleSlice;
