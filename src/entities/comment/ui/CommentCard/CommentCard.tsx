import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/Comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
}

export const CommentCard = memo(({ className, comment }: CommentCardProps) => (
  <section className={classNames(cls.CommentCard, [className])}>
    <div className={cls.header}>
      <Avatar className={cls.avatar} size='30px' />
      <Text title={comment.user.username} />
    </div>
    <Text text={comment.text} />
  </section>
));
