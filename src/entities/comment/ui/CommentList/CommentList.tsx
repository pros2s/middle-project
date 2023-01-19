import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Flex } from '@/shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/Comment';

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <Flex direction='column' className={classNames('', [className])}>
          <CommentCard isLoading={isLoading} />
          <CommentCard isLoading={isLoading} />
          <CommentCard isLoading={isLoading} />
        </Flex>
      );
    }

    return (
      <Flex direction='column' className={classNames('', [className])}>
        {comments.length ? (
          comments
            .reverse()
            .map((comment) => (
              <CommentCard
                key={comment.id}
                isLoading={isLoading}
                comment={comment}
              />
            ))
        ) : (
          <Text title={t('commentsNotFound')} />
        )}
      </Flex>
    );
  },
);
