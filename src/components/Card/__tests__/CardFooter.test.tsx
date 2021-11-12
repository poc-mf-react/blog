import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CardFooter } from '../CardFooter';

const content = 'Footer';

const setup = (): object => render(<CardFooter>{content}</CardFooter>);

describe('<CardFooter/>', () => {
  it('renders component with content', () => {
    setup();

    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
