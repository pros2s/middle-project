import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SVGIcon } from '@/shared/ui/SVGIcon/SVGIcon';
import { Text } from '@/shared/ui/Text/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/Card/Card';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button } from '@/shared/ui/Button/Button';
import { RoutesPaths } from '@/shared/lib/routes/routes';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Flex } from '@/shared/ui/Stack/Flex';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlockType,
  ArticleView,
} from '../../model/types/Article';

import cls from './ArticleItem.module.scss';

interface ArticleItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleItem = memo(
  ({ className, article, view }: ArticleItemProps) => {
    const { t } = useTranslation('articlesPage');

    const types = <Text className={cls.types} text={article.type.join(', ')} />;
    const views = (
      <>
        <Text className={cls.views} text={String(article.views)} />
        <SVGIcon Svg={EyeIcon} size={20} />
      </>
    );

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (item) => item.type === ArticleBlockType.TEXT,
      ) as ArticleTextBlockType;

      return (
        <section
          className={classNames(cls.ArticleItem, [className, cls[view]])}
        >
          <Card>
            <Flex align='center'>
              <Avatar
                size='30px'
                src={article.user.avatar}
                alt={article.user.username}
              />
              <Text className={cls.username} text={article.user.username} />
              <Text className={cls.date} text={article.createdAt} />
            </Flex>

            <Text className={cls.title} title={article.title} />

            {types}
            <img className={cls.img} src={article.imgBig} alt={article.title} />

            {textBlock && (
              <ArticleTextBlock className={cls.text} block={textBlock} />
            )}
            <footer className={classNames(cls.footer)}>
              <Flex align='center'>
                <AppLink to={RoutesPaths.articleDetails + article.id}>
                  <Button>{t('readMore')}</Button>
                </AppLink>
                {views}
              </Flex>
            </footer>
          </Card>
        </section>
      );
    }

    return (
      <AppLink
        to={RoutesPaths.articleDetails + article.id}
        className={classNames(cls.ArticleItem, [className, cls[view]])}
      >
        <Card>
          <Flex justify='center' direction='column' className={cls.imageInner}>
            <img src={article.imgSmall} alt={article.title} />
            <Text className={cls.date} text={article.createdAt} />
          </Flex>
          <Flex align='center' gap='8'>
            {types}
            {views}
          </Flex>
          <Text className={cls.title} text={article.title} />
        </Card>
      </AppLink>
    );
  },
);
