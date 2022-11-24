export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

interface ArticleEveryBlock {
  id: string;
  type: string;
}

export interface ArticleTextBlockType extends ArticleEveryBlock {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleCodeBlockType extends ArticleEveryBlock {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImgaeBlockType extends ArticleEveryBlock {
  type: ArticleBlockType.IMAGE;
  title: string;
  src: string;
}

export type ArticleBlock =
  | ArticleTextBlockType
  | ArticleCodeBlockType
  | ArticleImgaeBlockType;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: 1022;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
