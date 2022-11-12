enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

interface ArticleEveryBlock {
  id: string;
  type: string;
}

export interface ArticleTextBlock extends ArticleEveryBlock {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleEveryBlock {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImgaeBlock extends ArticleEveryBlock {
  type: ArticleBlockType.IMAGE;
  title: string;
  src: string;
}

type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImgaeBlock;

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
