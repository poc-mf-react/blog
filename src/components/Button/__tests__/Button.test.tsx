import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

type setupProps = {
  testId?: string;
};

const setup = ({ testId }: setupProps = {}): object =>
  render(<Button data-testid={testId} />);

describe('<Button/>', () => {
  describe('with defaults', () => {
    beforeEach(() => {
      setup();
    });

    it('renders button', () => {
      expect(screen.getByTestId('button')).toBeInTheDocument();
    });

    it('renders icon', () => {
      expect(screen.getByTestId('button-icon')).toBeInTheDocument();
    });
  });

  describe('with custom test id', () => {
    beforeEach(() => {
      setup({ testId: 'custom' });
    });

    it('renders button', () => {
      expect(screen.getByTestId('custom')).toBeInTheDocument();
    });

    it('renders icon', () => {
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });
  });
});
