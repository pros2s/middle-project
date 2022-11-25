import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/Comment';

import cls from './CommentList.module.scss';

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
        <div className={classNames(cls.CommentList, [className])}>
          <CommentCard isLoading={isLoading} />
          <CommentCard isLoading={isLoading} />
          <CommentCard isLoading={isLoading} />
        </div>
      );
    }

    return (
      <div className={classNames(cls.CommentList, [className])}>
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
      </div>
    );
  },
);
