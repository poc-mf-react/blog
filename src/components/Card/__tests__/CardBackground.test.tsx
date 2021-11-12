import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CardBackground } from '../CardBackground';

const content = 'Background';

const setup = (): object => render(<CardBackground>{content}</CardBackground>);

describe('<CardBackground/>', () => {
  it('renders component with content', () => {
    setup();

    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
