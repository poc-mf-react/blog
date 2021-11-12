import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CardContent } from '../CardContent';

const content = 'Content';

const setup = (): object => render(<CardContent>{content}</CardContent>);

describe('<CardContent/>', () => {
  it('renders component with content', () => {
    setup();

    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
