import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/article';

import { Text, TextAlign, TextThemes } from '@/shared/ui/Text/Text';

import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Flex } from '@/shared/ui/Stack/Flex';
import { ArticleDetailsPageComments } from '../ArticleDetailsPageComments/ArticleDetailsPageComments';

const ArticleDetailsPage: FC = () => {
  const { t } = useTranslation('articlesPage');

  const { id } = useParams<{ id: string }>();

  if (!id && __PROJECT__ !== 'storybook') {
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
      <Text title={t('comments')} />
      <ArticleDetailsPageComments id={id} />
    </Page>
  );
};

export default memo(ArticleDetailsPage);
