import { memo, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { SVGIcon } from 'shared/ui/SVGIcon/SVGIcon';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticleTextBlock } from 'entities/article/ui/ArticleTextBlock/ArticleTextBlock';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { RoutesPaths } from 'shared/lib/routes/routes';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
      navigate(RoutesPaths.articleDetails + article.id);
    }, [article.id, navigate]);

    const types = <Text className={cls.types} text={article.type.join(', ')} />;
    const views = (
      <>
        <Text className={cls.views} text={String(article.views)} />
        <SVGIcon Svg={EyeIcon} />
      </>
    );

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (item) => item.type === ArticleBlockType.TEXT,
      ) as ArticleTextBlockType;

      return (
        <section className={classNames(cls.ArticleItem, [className, cls[view]])}>
          <Card>
            <header className={cls.header}>
              <Avatar
                size='30px'
                src={article.user.avatar}
                alt={article.user.username}
              />
              <Text className={cls.username} text={article.user.username} />
              <Text className={cls.date} text={article.createdAt} />
            </header>

            <Text className={cls.title} title={article.title} />

            {types}
            <img className={cls.img} src={article.img} alt={article.title} />

            {textBlock && (
              <ArticleTextBlock className={cls.text} block={textBlock} />
            )}

            <footer className={cls.footer}>
              <Button onClick={onOpenArticle}>{t('readMore')}</Button>
              {views}
            </footer>
          </Card>
        </section>
      );
    }

    return (
      <section className={classNames(cls.ArticleItem, [className, cls[view]])}>
        <Card onClick={onOpenArticle}>
          <div className={cls.imageInner}>
            <img src={article.img} alt={article.title} />
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <div className={cls.infoInner}>
            {types}
            {views}
          </div>
          <Text className={cls.title} text={article.title} />
        </Card>
      </section>
    );
  },
);
