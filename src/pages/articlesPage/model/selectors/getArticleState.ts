import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/article';

export const getArticleIsLoading = (state: StateSchema) =>
  state.article?.isLoading;
export const getArticleView = (state: StateSchema) =>
  state.article?.view || ArticleView.SMALL;

export const getArticlePage = (state: StateSchema) => state.article?.page || 1;
export const getArticleLimit = (state: StateSchema) =>
  state.article?.limit || 3;
export const getArticleHasMore = (state: StateSchema) => state.article?.hasMore;
export const getArticleInited = (state: StateSchema) => state.article?._inited;
