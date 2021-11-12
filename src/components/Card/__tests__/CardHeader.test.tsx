import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CardHeader } from '../CardHeader';

const content = 'Content';

const setup = (): object => render(<CardHeader>{content}</CardHeader>);

describe('<CardHeader/>', () => {
  it('renders component with content', () => {
    setup();

    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
