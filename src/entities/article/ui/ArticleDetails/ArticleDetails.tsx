import { memo, ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextSize, TextThemes } from 'shared/ui/Text/Text';
import DateIcon from 'shared/assets/icons/date.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { SVGIcon } from 'shared/ui/SVGIcon/SVGIcon';
import { useFetchEffect } from 'shared/lib/hooks/useFetchEffect';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import {
  getArticleLoading,
  getArticleData,
  getArticleErrorMessage,
} from '../../model/selectors/getArticleState';
import { fetchArticleData } from '../../model/services/fetchArticleData';
import { articleDetailsReducer } from '../../model/slice/ArticleSlice';

import cls from './ArticleDetails.module.scss';
import { ArticleBlock, ArticleBlockType } from '../../model/types/Article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const isLoading = useSelector(getArticleLoading);
  const errorMessage = useSelector(getArticleErrorMessage);
  const data = useSelector(getArticleData);
  const dispatch = useAppDispatch();

  useFetchEffect(() => {
    dispatch(fetchArticleData(id));
  });

  const blockComponent = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return (
          <article key={block.id} className={cls.block}>
            <ArticleTextBlock block={block} />
          </article>
        );
      case ArticleBlockType.CODE:
        return (
          <article key={block.id} className={cls.block}>
            <ArticleCodeBlock block={block} />
          </article>
        );
      case ArticleBlockType.IMAGE:
        return (
          <article key={block.id} className={cls.block}>
            <ArticleImageBlock block={block} />
          </article>
        );

      default:
        return null;
    }
  }, []);

  let content: ReactNode;
  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          borderRadius='50%'
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width='100%' height={200} />
        <Skeleton className={cls.skeleton} width='100%' height={200} />
      </>
    );
  } else if (errorMessage) {
    content = <Text text={errorMessage} theme={TextThemes.ERROR} />;
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size='200px' src={data?.img} className={cls.avatar} />
        </div>
        <Text size={TextSize.L} title={data?.title} text={data?.subtitle} />
        <div className={cls.description}>
          <SVGIcon className={cls.icon} Svg={EyeIcon} />
          <Text text={String(data?.views)} />
        </div>
        <div className={cls.description}>
          <SVGIcon className={cls.icon} Svg={DateIcon} />
          <Text text={data?.createdAt} />
        </div>
        {data?.blocks.map(blockComponent)}
      </>
    );
  }

  return (
    <DynamicReducerLoader reducers={initialReducers}>
      <div className={classNames(cls.ArticleDetails, [className])}>
        {content}
      </div>
    </DynamicReducerLoader>
  );
});
