import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/comment';

export interface ArticleDetailsPageSchema extends EntityState<Comment> {
  isLoading: boolean;
  errorMessage?: string;
}
