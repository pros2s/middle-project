import { CSSProperties, useMemo, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
  size?: string;
  src?: string;
  alt?: string;
  align?: 'center' | '';
  className?: string;
}

export const Avatar = memo(
  ({ alt, size, src, className, align = '' }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(
      () => ({
        width: size,
        height: size,
      }),
      [size],
    );

    return (
      <div
        className={classNames(cls.Avatar, [className, cls[align]])}
        style={styles}
      >
        <img
          className={cls.image}
          src={src || `https://via.placeholder.com/${size?.slice(0, -2)}`}
          alt={alt}
        />
      </div>
    );
  },
);
