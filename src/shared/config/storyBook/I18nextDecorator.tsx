import { Story, StoryContext } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

export const I18nextDecorator = (
  StoryComponent: Story,
  { globals }: StoryContext,
) => {
  const { locale } = globals;
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback=''>
        <StoryComponent />
      </Suspense>
    </I18nextProvider>
  );
};
