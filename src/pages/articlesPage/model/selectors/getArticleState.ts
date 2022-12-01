import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/article';

export const getArticleIsLoading = (state: StateSchema) =>
  state.article?.isLoading;
export const getArticleView = (state: StateSchema) =>
  state.article?.view || ArticleView.SMALL;
