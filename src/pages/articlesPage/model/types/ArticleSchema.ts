import { EntityState } from '@reduxjs/toolkit';
import {
  Article,
  ArticleSortFields,
  ArticleType,
  ArticleView,
} from '@/entities/article';
import { OrderType } from '@/shared/types/order';

export interface ArticleSchema extends EntityState<Article> {
  isLoading: boolean;
  errorMessage?: string;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;
  _inited: boolean;

  // filters
  sortType: ArticleSortFields;
  order: OrderType;
  search: string;
  activeType: ArticleType;
}
