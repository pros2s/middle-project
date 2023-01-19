import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { generatePath, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { RoutesPaths } from '@/shared/lib/routes/routes';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Flex } from '@/shared/ui/Stack';
import {
  canArticleEdit,
  getArticleData,
} from '../../../model/selectors/getArticleState';
import cls from './ArticleDetailsHeader.module.scss';

interface ArticleDetailsHeaderProps {
  className?: string;
}

export const ArticleDetailsHeader = memo(
  ({ className }: ArticleDetailsHeaderProps) => {
    const { t } = useTranslation('articlesPage');
    const navigate = useNavigate();

    const canEdit = useSelector(canArticleEdit);
    const article = useSelector(getArticleData);

    const onEditArticle = useCallback(() => {
      if (article?.id) {
        const path = generatePath('/articles/:id/edit', { id: article.id });
        navigate(path);
      }
    }, [article?.id, navigate]);

    const onComeBack = useCallback(() => {
      navigate(RoutesPaths.articles);
    }, [navigate]);

    return (
      <header className={classNames('', [className])}>
        <Flex align='center'>
          <Button onClick={onComeBack}>{t('backToArticleList')}</Button>
          {canEdit && (
            <Button className={cls.edit} onClick={onEditArticle}>
              {t('editArticle')}
            </Button>
          )}
        </Flex>
      </header>
    );
  },
);
