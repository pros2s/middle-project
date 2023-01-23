import { CSSProperties, useMemo, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import { SVGIcon } from '../SVGIcon';

import ErrorFallback from '@/shared/assets/icons/avatar.svg';

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
        <AppImage
          fallback={<Skeleton height={40} width={40} borderRadius='50%' />}
          errorFallback={<SVGIcon Svg={ErrorFallback} />}
          className={cls.image}
          src={src}
          alt={alt}
        />
      </div>
    );
  },
);
