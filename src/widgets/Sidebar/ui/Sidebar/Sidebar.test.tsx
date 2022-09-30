import { fireEvent, screen } from '@testing-library/react';
import { renderWithI18N } from 'shared/lib/testHelpers/renderWithI18N';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
  test('exists inside the dom', () => {
    renderWithI18N(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('collapsed?', () => {
    renderWithI18N(<Sidebar />);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    fireEvent.click(screen.getByTestId('collapsedBTN'));
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
