import { buildSelector } from '@/shared/lib/store';

export const [useGetAddCommentError, getAddCommentError] = buildSelector(
  (state) => state.addComment?.errorMessage,
);

export const [useGetAddCommentText, getAddCommentText] = buildSelector(
  (state) => state.addComment?.text,
);
