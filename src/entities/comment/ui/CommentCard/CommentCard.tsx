import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutesPaths } from 'shared/lib/routes/routes';
import { Flex } from 'shared/ui/Stack/Flex';
import { Comment } from '../../model/types/Comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
      return (
        <section className={classNames(cls.CommentCard, [className])}>
          <div className={cls.header}>
            <Skeleton
              className={cls.avatar}
              height='30px'
              width='30px'
              borderRadius='50%'
            />
            <div className={cls.header}>
              <Skeleton height='30px' width='130px' />
            </div>
          </div>
          <Skeleton height='30px' width='100%' />
        </section>
      );
    }

    if (!comment) {
      return null;
    }

    return (
      <Flex
        direction='column'
        justify='between'
        className={classNames(cls.CommentCard, [className])}
      >
        <AppLink
          to={`${RoutesPaths.profile}${comment?.user.id}`}
          className={cls.header}
        >
          <Avatar
            className={cls.avatar}
            size='30px'
            src={comment?.user.avatar}
          />
          <Text title={comment?.user.username} />
        </AppLink>
        <Text text={comment?.text} />
      </Flex>
    );
  },
);
