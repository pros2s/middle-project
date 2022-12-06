import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  Article,
  ArticleSortFields,
  ArticleType,
  ArticleView,
} from 'entities/article';
import { LOCALE_STORAGE_VIEW_MODE } from 'shared/consts/localeStorage';
import { OrderType } from 'shared/types/order';
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
    limit: 6,
    _inited: false,
    sortType: ArticleSortFields.CREATEDAT,
    order: 'asc',
    search: '',
    activeType: ArticleType.ALL,
  }),
  reducers: {
    setView(state, { payload }: PayloadAction<ArticleView>) {
      state.view = payload;
      localStorage.setItem(LOCALE_STORAGE_VIEW_MODE, payload);
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
    setSortArticles(state, { payload }: PayloadAction<ArticleSortFields>) {
      state.sortType = payload;
    },
    setOrderArticles(state, { payload }: PayloadAction<OrderType>) {
      state.order = payload;
    },
    setSearchArticles(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    setActiveActiveType(state, { payload }: PayloadAction<ArticleType>) {
      state.activeType = payload;
    },
    initState(state) {
      const view = localStorage.getItem(
        LOCALE_STORAGE_VIEW_MODE,
      ) as ArticleView;

      state.view = view;
      state.limit = view === ArticleView.BIG ? 2 : 6;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state, { meta }) => {
        state.errorMessage = undefined;
        state.isLoading = true;

        if (meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticles.fulfilled, (state, { payload, meta }) => {
        state.errorMessage = undefined;
        state.isLoading = false;
        state.hasMore = payload.length >= state.limit;

        if (meta.arg.replace) {
          articlesAdapter.setAll(state, payload);
        } else {
          articlesAdapter.addMany(state, payload);
        }
      })
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
