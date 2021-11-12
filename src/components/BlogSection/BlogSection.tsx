import React from 'react';
import { Box } from '@creditas-ui/layout';
import { SectionTitle } from '../SectionTitle';
import i18n from '../../i18n';

const BlogSection = (): JSX.Element => {
  return (
    <Box>
      <SectionTitle>{i18n.t('cards:blog.title')}</SectionTitle>
      <Box>Articles</Box>
    </Box>
  );
};

export { BlogSection };
