import * as React from 'react';
import { Box, BoxProps } from '@creditas-ui/layout';

type CardFooterProps = BoxProps & {
  children: React.ReactNode;
};

const CardFooter = ({ children }: CardFooterProps): JSX.Element => {
  return (
    <Box
      borderBottomLeftRadius="20px"
      borderBottomRightRadius="20px"
      overflow="hidden"
      position="relative"
      zIndex={1}
    >
      {children}
    </Box>
  );
};

export { CardFooter };
