import { screen } from '@testing-library/react';
import { Counter } from 'entities/counter/ui/Counter';
import { renderComponent } from 'shared/lib/testHelpers/renderComponent';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
  beforeEach(() => {
    renderComponent(<Counter />, { preloadedState: { counter: { value: 0 } } });
  });

  test('exists inside the dom', () => {
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('rendered right value with preloaded state', () => {
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  test('increment on click ++ button', () => {
    userEvent.click(screen.getByTestId('counter-increment'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  test('decrement on click -- button', () => {
    userEvent.click(screen.getByTestId('counter-decrement'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('-1');
  });
});
