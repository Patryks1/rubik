import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import Home from '@/pages/index';

const ROTATE_TEST_CASES = [
  {
    face: 'FRONT',
    tag: 'F',
    direction: 'CLOCKWISE',
  },
  {
    face: 'RIGHT',
    tag: "R'",
    direction: 'COUNTER CLOCKWISE',
  },
  {
    face: 'UP',
    tag: 'U',
    direction: 'CLOCKWISE',
  },
  {
    face: 'BACK',
    tag: "B'",
    direction: 'COUNTER CLOCKWISE',
  },
  {
    face: 'LEFT',
    tag: 'L',
    direction: 'CLOCKWISE',
  },
  {
    face: 'DOWN',
    tag: "D'",
    direction: 'CLOCKWISE',
  },
];

describe('Home', () => {
  afterAll(() => {
    cleanup();
  });

  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('renders rubik cube', () => {
    render(<Home />);

    const rubikCubeContainer = screen.getByTestId('rubik-cube-container');
    expect(rubikCubeContainer).toBeInTheDocument();
  });

  describe('Controls', () => {
    it('renders controls', () => {
      render(<Home />);

      const controlsContainer = screen.getByTestId('controls-container');
      expect(controlsContainer).toBeInTheDocument();
    });

    it.each(ROTATE_TEST_CASES)(
      'rotate "$face" 90 degrees "$direction"',
      ({ tag }) => {
        const { container } = render(<Home />);

        const button = screen.getByText(tag);
        fireEvent.click(button);

        expect(container).toMatchSnapshot();
      }
    );

    it.each(ROTATE_TEST_CASES)(
      'rotate "$face" 90 degrees "$direction" 4 times should give us initial state',
      ({ tag }) => {
        const { container } = render(<Home />);

        const button = screen.getByText(tag);
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);

        expect(container).toMatchSnapshot();
      }
    );
  });
});
