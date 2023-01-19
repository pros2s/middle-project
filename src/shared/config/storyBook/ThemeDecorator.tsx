import { Story } from '@storybook/react';
// eslint-disable-next-line pross-plugin/fsd-layer-imports
import { ThemesProvider } from '@/app/providers/ThemesProvider';
import { Themes } from '@/shared/consts/themes';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) =>
  (
    <ThemesProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemesProvider>
  );
