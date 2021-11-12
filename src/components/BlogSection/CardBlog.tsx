import React from 'react';
import { Typography } from '@creditas-ui/typography';
import { Card, CardHeader, CardContent, CardFooter } from '../Card';
import { Tag, Image } from './CardBlog.style';

type CardProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  tag: string;
  title: string;
  image: string;
};

const CardBlog = ({ onClick, tag, title, image }: CardProps): JSX.Element => {
  return (
    <Card
      maxWidth="292px"
      minHeight="452px"
      onClick={onClick}
      display="flex"
      flexDirection="column"
    >
      <CardHeader>
        <Tag>{tag}</Tag>
      </CardHeader>
      <CardContent paddingTop="96px" flex="1 1 auto" marginTop="0">
        <Typography variant="bodyMdRegular" color="neutral.90">
          {title}
        </Typography>
      </CardContent>
      <CardFooter>
        <Image
          data-testid="card-image"
          width="100%"
          height="182px"
          backgroundImage={`url(${image})`}
        />
      </CardFooter>
    </Card>
  );
};

export { CardBlog };
