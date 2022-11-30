export { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export {
  articleDetailsReducer,
  articleDetailsActions,
} from './model/slice/ArticleSlice';
export { getArticleData } from './model/selectors/getArticleState';

export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleView, Article } from './model/types/Article';
