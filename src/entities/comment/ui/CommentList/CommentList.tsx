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
}

export const CommentList = memo(({ className, comments }: CommentListProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.CommentList, [className])}>
      {comments.length ? (
        comments.map((comment) => <CommentCard comment={comment} />)
      ) : (
        <Text title={t('commentsNotFound')} />
      )}
    </div>
  );
});
