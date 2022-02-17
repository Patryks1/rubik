import { render, cleanup, screen } from '@testing-library/react';
import React from 'react';
import Face from '@/components/Rubik/Face';
import { Color } from 'interfaces';

describe('Face', () => {
  afterAll(() => {
    cleanup();
  });

  it('renders Face', () => {
    const tiles: Color[] = Array(9).fill('red');
    const { container } = render(<Face tiles={tiles} />);
    expect(container).toMatchSnapshot();
  });

  it('renders 3x3 grid', () => {
    const tiles: Color[] = Array(9).fill('red');
    render(<Face tiles={tiles} />);

    const cells = screen.getAllByTestId('tile-cell');

    expect(cells.length).toBe(9);
  });
});
