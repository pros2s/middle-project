import { Story } from '@storybook/react';
import { Themes, ThemesProvider } from '@/app/providers/ThemesProvider';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) =>
  (
    <ThemesProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemesProvider>
  );
