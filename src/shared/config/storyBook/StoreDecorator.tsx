import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider preloadedState={state} asyncReducers={asyncReducers}>
        <StoryComponent />
      </StoreProvider>
    );
