import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/article';

export interface ArticleSchema extends EntityState<Article> {
  isLoading: boolean;
  errorMessage?: string;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;
  _inited: boolean;
}
