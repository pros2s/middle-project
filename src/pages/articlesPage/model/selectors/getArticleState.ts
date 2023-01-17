import { StateSchema } from '@/app/providers/StoreProvider';
import {
  ArticleSortFields,
  ArticleType,
  ArticleView,
} from '@/entities/article';

export const getArticleIsLoading = (state: StateSchema) =>
  state.article?.isLoading;
export const getArticleView = (state: StateSchema) =>
  state.article?.view || ArticleView.SMALL;

export const getArticlePage = (state: StateSchema) => state.article?.page || 1;
export const getArticleLimit = (state: StateSchema) =>
  state.article?.limit || 6;
export const getArticleHasMore = (state: StateSchema) => state.article?.hasMore;
export const getArticleInited = (state: StateSchema) => state.article?._inited;

// filters
export const getArticleOrder = (state: StateSchema) =>
  state.article?.order ?? 'asc';
export const getArticleSort = (state: StateSchema) =>
  state.article?.sortType ?? ArticleSortFields.CREATEDAT;
export const getArticleSearch = (state: StateSchema) =>
  state.article?.search ?? '';
export const getArticleActiveType = (state: StateSchema) =>
  state.article?.activeType ?? ArticleType.ALL;
