import React from 'react';
import { Box } from '@creditas-ui/layout';
import { Typography } from '@creditas-ui/typography';
import { styled } from '@creditas-ui/system';

const TagContent = styled(Typography)`
  letter-spacing: 1.5px;
  font-size: 10px;
  text-transform: uppercase;
`;

const Image = styled(Box)`
  background-repeat: no-repeat;
  background-size: cover;
`;

type TagProps = {
  children: React.ReactNode;
};

const Tag = ({ children }: TagProps): JSX.Element => (
  <Box
    padding="0 12px"
    border="1px solid"
    borderColor="neutral.90"
    borderRadius="100px"
    height="20px"
    display="flex"
    alignItems="center"
  >
    <TagContent variant="bodyXsBold" color="neutral.90">
      {children}
    </TagContent>
  </Box>
);

export { Tag, Image };
