import { render, screen } from '@testing-library/react';
import { Button, ButtonThemes } from './Button';

describe('button tests', () => {
  test('inside the dom', () => {
    render(<Button>Text</Button>);
    expect(screen.getByText(/text/i)).toBeInTheDocument();
  });

  test('theme exists', () => {
    render(<Button theme={ButtonThemes.CLEAR}>Text</Button>);
    expect(screen.getByText(/text/i)).toHaveClass('clear');
  });

  test('className of props exists', () => {
    render(<Button className='newClass'>Text</Button>);
    expect(screen.getByText(/text/i)).toHaveClass('newClass');
  });
});
