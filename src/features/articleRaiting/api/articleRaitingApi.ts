import { Raiting } from '@/entities/raiting';
import { rtkApi } from '@/shared/api/rtkApi';

interface ArticleRaitingArg {
  articleId: string;
  userId: string;
}

interface RateArtilceArg {
  articleId: string;
  userId: string;
  rate: number;
  feedback?: string;
}

const articleRaitingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRaiting: build.query<Raiting[], ArticleRaitingArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-raiting',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArtilceArg>({
      query: (args) => ({
        url: '/article-raiting',
        method: 'post',
        body: args,
      }),
    }),
  }),
});

export const useArticleRaiting = articleRaitingApi.useGetArticleRaitingQuery;
export const useRateArticle = articleRaitingApi.useRateArticleMutation;
