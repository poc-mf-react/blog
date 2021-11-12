import React from 'react';
import { StyledSystemProps } from '@creditas-ui/utilities';
import { CardStyle } from './Card.style';

export type CardBaseProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  shadow?: boolean;
  children: React.ReactNode;
};
export type CardElProps = React.HTMLAttributes<HTMLDivElement>;
export type CardStyleProps = Omit<StyledSystemProps, 'color'>;
export type CardProps = CardBaseProps & CardStyleProps & CardElProps;

const Card = ({
  children,
  onClick,
  bg = 'neutral.0',
  shadow = false,
  ...props
}: CardProps): JSX.Element => {
  return (
    <CardStyle
      tabIndex={0}
      bg={bg}
      onClick={onClick}
      shadow={shadow}
      {...props}
    >
      {children}
    </CardStyle>
  );
};
export { Card };
