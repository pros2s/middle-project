import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Flex } from '@/shared/ui/Stack';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
  <Flex
    align='center'
    justify='center'
    className={classNames(cls.PageLoader, [className])}
  >
    <Loader />
  </Flex>
));
