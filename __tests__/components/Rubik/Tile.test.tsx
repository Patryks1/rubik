import { render, cleanup } from '@testing-library/react';
import React from 'react';
import Tile from '@/components/Rubik/Tile';

describe('Tile', () => {
  afterAll(() => {
    cleanup();
  });

  it('renders Tile', () => {
    const { container } = render(<Tile color='red' index={1} />);
    expect(container).toMatchSnapshot();
  });
});
