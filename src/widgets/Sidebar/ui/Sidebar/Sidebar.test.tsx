import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from '@/shared/lib/testHelpers/renderComponent';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
  test('exists inside the dom', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('collapsed?', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    fireEvent.click(screen.getByTestId('collapsedBTN'));
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
