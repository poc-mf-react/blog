import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressBarProps, ProgressBar } from '../ProgressBar';

const setup = ({ size, filled }: ProgressBarProps): object =>
  render(<ProgressBar size={size} filled={filled} />);

const widthPercent = (width: number): string => `width: ${width}%`;

describe('<ProgressBar/>', () => {
  describe('renders happy cases', () => {
    it.each`
      size | filled | expected
      ${5} | ${1}   | ${20}
      ${5} | ${2}   | ${40}
      ${5} | ${3}   | ${60}
      ${5} | ${4}   | ${80}
      ${5} | ${5}   | ${100}
    `(
      'renders component with $expected  filled when size is $size  and filled is $filled',
      ({ size, filled, expected }) => {
        setup({ size, filled });
        expect(screen.getByTestId('progress-bar-filled')).toHaveStyle(
          widthPercent(expected)
        );
      }
    );
  });

  describe('renders edge cases', () => {
    it('renders component with 20% filled when filled is less the one', () => {
      setup({ size: 5, filled: 0 });

      expect(screen.getByTestId('progress-bar-filled')).toHaveStyle(
        widthPercent(20)
      );
    });

    it('renders component with 100% filled when filled is gran then size', () => {
      setup({ size: 5, filled: 6 });

      expect(screen.getByTestId('progress-bar-filled')).toHaveStyle(
        widthPercent(100)
      );
    });
  });
});
