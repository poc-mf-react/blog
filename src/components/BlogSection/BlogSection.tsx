import React, { useCallback } from 'react';
import { Box } from '@creditas-ui/layout';
import { CardBlog } from './CardBlog';
import { SectionTitle } from '../SectionTitle';
import { Slider } from '../Slider';
import i18n from '../../i18n';
import { posts } from '../../config/blog';

const BlogSection = (): JSX.Element => {
  const handleCardClick = useCallback(
    ({ link, title, index }) =>
      (): void => {},
    []
  );

  return (
    <Box>
      <SectionTitle>{i18n.t('cards:blog.title')}</SectionTitle>
      <Slider>
        {posts.map(({ id, link, ...post }, index) => (
          <CardBlog
            key={id}
            {...post}
            onClick={handleCardClick({ link, title: post.title, index })}
          />
        ))}
      </Slider>
    </Box>
  );
};

export { BlogSection };
