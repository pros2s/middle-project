import { Article } from './Article';

export interface ArticleDetailsSchema {
  data?: Article;
  isLoading?: boolean;
  errorMessage?: string;
}
