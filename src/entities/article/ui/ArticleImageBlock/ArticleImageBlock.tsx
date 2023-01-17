import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Flex } from '@/shared/ui/Stack/Flex';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { ArticleImgaeBlockType } from '../../model/types/Article';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImgaeBlockType;
}

export const ArticleImageBlock = memo(
  ({ className, block }: ArticleImageBlockProps) => (
    <Flex
      direction='column'
      align='center'
      className={classNames('', [className])}
    >
      <img src={block.src} alt={block.title} />
      {block.title && <Text align={TextAlign.CENTER} title={block.title} />}
    </Flex>
  ),
);
