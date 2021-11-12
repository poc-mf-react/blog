import * as React from 'react';
import { Flex, BoxProps } from '@creditas-ui/layout';

type CardHeaderProps = BoxProps & {
  children: React.ReactNode;
};

const CardHeader = ({
  children,
  padding = '24px',
}: CardHeaderProps): JSX.Element => {
  return (
    <Flex
      justifyContent="space-between"
      padding={padding}
      position="relative"
      zIndex={1}
    >
      {children}
    </Flex>
  );
};

export { CardHeader };
