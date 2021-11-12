import React from 'react';
import { Typography } from '@creditas-ui/typography';
import { styled } from '@creditas-ui/system';

const SectionTitleStyle = styled(Typography)`
  text-transform: uppercase;
`;

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps): JSX.Element => {
  return (
    <SectionTitleStyle variant="exceptionMdBold" color="neutral.60">
      {children}
    </SectionTitleStyle>
  );
};

export { SectionTitle };
