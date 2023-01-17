import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code/Code';
import { ArticleCodeBlockType } from '../../model/types/Article';

import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockType;
}

export const ArticleCodeBlock = memo(
  ({ className, block }: ArticleCodeBlockProps) => (
    <Code
      className={classNames(cls.ArticleCodeBlock, [className])}
      text={block.code}
    />
  ),
);
