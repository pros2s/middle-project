import { CSSProperties, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
}

export const Skeleton = memo(
  ({ className, borderRadius, height, width }: SkeletonProps) => {
    const styles: CSSProperties = {
      width,
      height,
      borderRadius,
    };

    return (
      <div style={styles} className={classNames(cls.Skeleton, [className])} />
    );
  },
);
