import { CSSProperties, useMemo, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
  size?: string;
  src?: string;
  alt?: string;
  className?: string;
}

export const Avatar = memo(({ alt, size, src, className }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );
  return (
    <div className={classNames(cls.Avatar, [className])} style={styles}>
      <img className={cls.image} src={src} alt={alt} />
    </div>
  );
});
