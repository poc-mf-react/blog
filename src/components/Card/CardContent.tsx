import * as React from 'react';
import { Box, BoxProps } from '@creditas-ui/layout';

type CardContentProps = BoxProps & {
  children: React.ReactNode;
};

const CardContent = ({
  children,
  marginTop = '48px',
  paddingRight,
}: CardContentProps): JSX.Element => {
  return (
    <Box
      padding="24px"
      paddingRight={paddingRight}
      marginTop={marginTop}
      position="relative"
      zIndex={1}
    >
      {children}
    </Box>
  );
};

export { CardContent };
