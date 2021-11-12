import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from '../Card';

const content = 'Content';
type Callback = () => void;
const onClick = jest.fn();

const setup = (fn: Callback = (): void => {}): object =>
  render(<Card onClick={fn}>{content}</Card>);

describe('<Card/>', () => {
  it('renders component with content', () => {
    setup();

    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('fires the callback when click on card', () => {
    setup(onClick);

    userEvent.click(screen.getByText(content));

    expect(onClick).toBeCalledTimes(1);
  });

  it('focus the card when tab is pressed', () => {
    setup();

    userEvent.tab();

    expect(screen.getByText(content)).toHaveFocus();
  });
});
