import { styled } from '@creditas-ui/system';
import { Box } from '@creditas-ui/layout';
import { media, withProp, prop } from '@creditas-ui/utilities';

const Slider = styled(Box)`
  position: relative;
  overflow: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

type SliderContentProps = {
  filled: number;
  size: number;
  contentWidth: number;
  contentGap: number;
};

const SliderContent = styled.div<SliderContentProps>`
  width: 100%;
  transform: ${withProp(
    ['filled', 'contentWidth', 'contentGap'],
    (filled, contentWidth, contentGap) =>
      `translateX(-${(filled - 1) * (contentWidth + contentGap)}px)`
  )};
  transition: 250ms all;
  display: grid;
  grid-template-columns: ${withProp(
    'size',
    (size) => `repeat(${size}, 292px)`
  )};
  gap: ${prop('contentGap')}px;
  margin: 24px 0;

  ${media.up('5xl')} {
    margin: 20px 0;
  }
`;

const SliderControls = styled.div`
  display: none;

  ${media.up('5xl')} {
    display: block;
  }
`;

export { Slider, SliderContent, SliderControls };
