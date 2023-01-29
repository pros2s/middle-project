import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SVGIcon } from '@/shared/ui/SVGIcon';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { getArticleByIdRoute } from '@/shared/lib/routes/routes';
import { AppLink } from '@/shared/ui/AppLink';
import { Flex } from '@/shared/ui/Stack';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlockType,
  ArticleView,
} from '../../model/types/Article';

import cls from './ArticleItem.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleItem = memo(
  ({ className, article, view }: ArticleItemProps) => {
    const { t } = useTranslation('articlesPage');

    const types = (
      <Text
        className={cls.types}
        text={article.type.join(', ')}
        data-testid='ArticleItem.Types'
      />
    );
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
          data-testid='ArticleItem'
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

            <Text
              className={cls.title}
              title={article.title}
              data-testid='ArticleItem.Text'
            />

            {types}
            <AppImage
              className={cls.img}
              src={article.imgBig}
              fallback={<Skeleton height={190} width='100%' />}
              alt={article.title}
            />

            {textBlock && (
              <ArticleTextBlock className={cls.text} block={textBlock} />
            )}
            <footer className={classNames(cls.footer)}>
              <Flex align='center'>
                <AppLink
                  className={cls.link}
                  to={getArticleByIdRoute(article.id)}
                >
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
        to={getArticleByIdRoute(article.id)}
        className={classNames(cls.link, [className, cls[view]])}
        data-testid='ArticleItem'
      >
        <Card>
          <Flex justify='center' direction='column' className={cls.imageInner}>
            <AppImage
              src={article.imgSmall}
              alt={article.title}
              fallback={<Skeleton height={190} width={190} />}
            />
            <Text className={cls.date} text={article.createdAt} />
          </Flex>
          <Flex align='center' gap='8'>
            {types}
            {views}
          </Flex>
          <Text
            className={cls.title}
            text={article.title}
            data-testid='ArticleItem.Text'
          />
        </Card>
      </AppLink>
    );
  },
);
