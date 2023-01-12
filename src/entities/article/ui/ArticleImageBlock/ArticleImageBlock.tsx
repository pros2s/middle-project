import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleImgaeBlockType } from '../../model/types/Article';

import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImgaeBlockType;
}

export const ArticleImageBlock = memo(
  ({ className, block }: ArticleImageBlockProps) => (
    <section className={classNames(cls.ArticleImageBlock, [className])}>
      <img src={block.src} alt={block.title} />
      {block.title && <Text align={TextAlign.CENTER} title={block.title} />}
    </section>
  ),
);
