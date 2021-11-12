import { styled } from '@creditas-ui/system';
import { ifProp } from '@creditas-ui/utilities';
import { Box } from '@creditas-ui/layout';
import { CardProps } from './Card';

const CardStyle = styled(Box)<CardProps>`
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  cursor: ${ifProp('onClick', 'pointer', 'initial')};
  filter: ${ifProp(
    'shadow',
    'drop-shadow(0px 28px 64px rgba(20, 20, 20, 0.16))',
    undefined
  )};
`;
export { CardStyle };
