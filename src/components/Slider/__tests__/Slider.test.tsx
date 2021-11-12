import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Box } from '@creditas-ui/layout';
import { Slider } from '../Slider';

const setup = (): object =>
  render(
    <Slider>
      <Box>first</Box>
      <Box>second</Box>
      <Box>third</Box>
    </Slider>
  );

describe('<Slider/>', () => {
  describe('Renders with initial state', () => {
    it('renders component with first content', () => {
      setup();

      expect(screen.getByText('first')).toBeInTheDocument();
    });

    it('renders component with second content', () => {
      setup();

      expect(screen.getByText('second')).toBeInTheDocument();
    });

    it('renders component with third content', () => {
      setup();

      expect(screen.getByText('third')).toBeInTheDocument();
    });

    it('renders component with prev button', () => {
      setup();

      expect(screen.getByTestId('slider-btn-prev')).toBeInTheDocument();
    });

    it('renders component with next button', () => {
      setup();

      expect(screen.getByTestId('slider-btn-next')).toBeInTheDocument();
    });
  });

  describe('when interacting with slider', () => {
    it('renders component with prev button disabled', () => {
      setup();

      expect(screen.getByTestId('slider-btn-prev')).toBeDisabled();
    });

    it('clicks on next button', () => {
      setup();

      userEvent.click(screen.getByTestId('slider-btn-next'));

      expect(screen.getByTestId('slider-btn-prev')).toBeEnabled();
    });

    it('clicks on prev button', () => {
      setup();

      userEvent.click(screen.getByTestId('slider-btn-next'));
      userEvent.click(screen.getByTestId('slider-btn-prev'));

      expect(screen.getByTestId('slider-btn-prev')).toBeDisabled();
    });

    it('disables next button when no next cards', () => {
      setup();

      userEvent.click(screen.getByTestId('slider-btn-next'));
      userEvent.click(screen.getByTestId('slider-btn-next'));
      userEvent.click(screen.getByTestId('slider-btn-next'));

      expect(screen.getByTestId('slider-btn-next')).toBeDisabled();
    });
  });
});
