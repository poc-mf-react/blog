import * as React from 'react';
import { StyledSystemProps } from '@creditas-ui/utilities';
import { ChevronRight } from '../../assets/icons/ChevronRight';
import { Button as ButtonElement } from './Button.style';

export type ButtonBaseProps = {
  /**
   * Optional change arrow icon direction
   */
  arrow?: 'left';
  /**
   * Optional disabled button
   */
  disabled?: boolean;
  /**
   * Optional handle click
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Optional data test id
   */
  'data-testid'?: string;
};
export type ButtonElProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled'
>;
export type ButtonStyledProps = StyledSystemProps;
export type ButtonProps = ButtonBaseProps & ButtonElProps & ButtonStyledProps;

const Button = ({
  arrow,
  disabled,
  onClick,
  'data-testid': dataTestid = 'button',
  ...props
}: ButtonProps): JSX.Element => {
  const buttonProps = { arrow, disabled, onClick, 'data-testid': dataTestid };
  const svgDataTestid = `${dataTestid}-icon`;
  return (
    <ButtonElement {...buttonProps} {...props}>
      <ChevronRight data-testid={svgDataTestid} />
    </ButtonElement>
  );
};

export { Button };
