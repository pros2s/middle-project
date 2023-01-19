import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/article';

import { Text, TextAlign, TextThemes } from '@/shared/ui/Text';

import { Page } from '@/widgets/Page';
import { Flex } from '@/shared/ui/Stack';
import { ArticleDetailsPageComments } from '../ArticleDetailsPageComments/ArticleDetailsPageComments';
import { ArticleRaiting } from '@/features/articleRaiting';

const ArticleDetailsPage: FC = () => {
  const { t } = useTranslation('articlesPage');

  const { id } = useParams<{ id: string }>();

  if ((!id && __PROJECT__ !== 'storybook') || !id) {
    return (
      <Flex direction='column'>
        <Text
          title={t('IdNotFound')}
          align={TextAlign.CENTER}
          theme={TextThemes.ERROR}
        />
      </Flex>
    );
  }

  return (
    <Page>
      <ArticleDetails id={id} />
      <ArticleRaiting articleId={id} />
      <Text title={t('comments')} />
      <ArticleDetailsPageComments id={id} />
    </Page>
  );
};

export default memo(ArticleDetailsPage);
