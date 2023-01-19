import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleTextBlockType } from '../../model/types/Article';

import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlockType;
}

export const ArticleTextBlock = memo(
  ({ className, block }: ArticleTextBlockProps) => (
    <section className={classNames(cls.ArticleTextBlock, [className])}>
      {block.title && <Text className={cls.title} title={block.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text className={cls.paragraph} key={paragraph} text={paragraph} />
      ))}
    </section>
  ),
);
