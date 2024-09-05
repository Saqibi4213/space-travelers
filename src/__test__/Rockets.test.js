import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Rockets from '../components/Rockets';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Rockets Component', () => {
  it('should render loading text when loading is true', () => {
    useSelector.mockReturnValue({
      loading: true,
      error: false,
      rocketData: [],
    });

    const { getByText } = render(<Rockets />);

    expect(getByText('Loading')).toBeDefined();
  });

  it('should render error text when error is true', () => {
    useSelector.mockReturnValue({
      loading: false,
      error: true,
      rocketData: [],
    });

    const { getByText } = render(<Rockets />);
    expect(getByText('Error...')).toBeDefined();
  });
});
