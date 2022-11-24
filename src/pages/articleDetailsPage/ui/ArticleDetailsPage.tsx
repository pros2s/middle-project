import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/article';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextThemes } from 'shared/ui/Text/Text';

import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/comment';
import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = () => {
  const { t } = useTranslation('articlesPage');
  const { id } = useParams<{ id: string }>();

  if (!id && __PROJECT__ !== 'storybook') {
    return (
      <div className={classNames(cls.ArticleDetailsPage)}>
        <Text
          title={t('IdNotFound')}
          align={TextAlign.CENTER}
          theme={TextThemes.ERROR}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage)}>
      <ArticleDetails id={id} />
      <Text title={t('comments')} />
      <CommentList
        comments={[
          { id: '1', text: 'text', user: { id: '1', username: 'username' } },
          {
            id: '2',
            text: 'text 2',
            user: { id: '2', username: 'username 2' },
          },
        ]}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
