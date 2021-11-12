import * as React from 'react';
import { Box, BoxProps } from '@creditas-ui/layout';

type CardBackgroundProps = BoxProps & {
  children: React.ReactNode;
};

const CardBackground = ({
  children,
  left,
  right,
  top,
  bottom,
}: CardBackgroundProps): JSX.Element => {
  return (
    <Box
      position="absolute"
      left={left}
      top={top}
      right={right}
      bottom={bottom}
      zIndex={0}
    >
      {children}
    </Box>
  );
};

export { CardBackground };
