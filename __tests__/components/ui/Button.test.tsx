import { render, cleanup, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '@/components/ui';

describe('Button', () => {
  afterAll(() => {
    cleanup();
  });

  it('renders button', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  it('renders children', () => {
    render(<Button>Test</Button>);

    expect(screen.getByText('Test')).toBeTruthy();
  });
});
