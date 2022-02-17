import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Controls from '@/components/Rubik/Controls';
import { RUBIK_INITIAL_STATE } from '../../../constants';

describe('Controls', () => {
  const setCube = jest.fn();

  afterAll(() => {
    cleanup();
  });

  afterEach(() => {
    setCube.mockClear();
  });

  it('renders Controls', () => {
    const { container } = render(<Controls setCube={setCube} cube={RUBIK_INITIAL_STATE} />);
    expect(container).toMatchSnapshot();
  });

  it.each(['F', "R'", 'U', "B'", 'L', "D'"])(
    'cube state changes when control button "%s" is clicked',
    (tag) => {
      render(<Controls setCube={setCube} cube={RUBIK_INITIAL_STATE} />);
      const button = screen.getByText(tag);

      fireEvent.click(button);

      expect(setCube).toHaveBeenCalledTimes(1);
    }
  );
});
