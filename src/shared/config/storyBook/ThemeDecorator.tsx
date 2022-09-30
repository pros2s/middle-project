import { Story } from '@storybook/react';
import { Themes } from 'app/providers/ThemesProvider';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) =>
  (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
