import * as React from 'react';
import { Flex, Box } from '@creditas-ui/layout';
import { Button } from '../Button';
import { ProgressBar } from '../ProgressBar';
import {
  Slider as SliderContainer,
  SliderContent,
  SliderControls,
} from './Slider.style';

const CONTENT_WIDTH = 292;
const CONTENT_GAP = 20;

export type SliderProps = {
  children: React.ReactNode;
};

const Slider = ({ children }: SliderProps): JSX.Element => {
  const CONTROLS_WIDTH = CONTENT_WIDTH * 2 + CONTENT_GAP;
  const boxRef = React.useRef<HTMLDivElement>(null);
  const [heightContent, setHeightContent] = React.useState('0px');
  const [filled, setFilled] = React.useState(1);
  const [hasPrev, setHasPrev] = React.useState(false);
  const [hasNext, setHasNext] = React.useState(true);
  const size = React.useMemo(() => React.Children.count(children), [children]);

  const prev = React.useCallback(() => {
    if (!hasPrev) {
      return;
    }

    setFilled(filled - 1);
  }, [filled, hasPrev]);

  const next = React.useCallback(() => {
    if (!hasNext) {
      return;
    }

    setFilled(filled + 1);
  }, [filled, hasNext]);

  React.useEffect(() => {
    if (filled <= 1) {
      setHasPrev(false);
    } else {
      setHasPrev(true);
    }
  }, [size, filled]);

  React.useEffect(() => {
    if (filled >= size) {
      setHasNext(false);
    } else {
      setHasNext(true);
    }
  }, [size, filled]);

  React.useEffect(() => {
    setHeightContent(`${boxRef?.current?.offsetHeight}px`);
  }, [boxRef]);

  return (
    <Box position="relative" height={heightContent}>
      <Box overflow="hidden" ref={boxRef}>
        <SliderContainer>
          <SliderContent
            size={size}
            filled={filled}
            contentWidth={CONTENT_WIDTH}
            contentGap={CONTENT_GAP}
            data-testid="slider-content"
          >
            {children}
          </SliderContent>
        </SliderContainer>
        <SliderControls>
          <Flex
            maxWidth={`${CONTROLS_WIDTH}px`}
            spaceX="32px"
            alignItems="center"
          >
            <ProgressBar size={size} filled={filled} />
            <Flex spaceX="8px">
              <Button
                arrow="left"
                onClick={prev}
                disabled={!hasPrev}
                data-testid="slider-btn-prev"
              />
              <Button
                onClick={next}
                disabled={!hasNext}
                data-testid="slider-btn-next"
              />
            </Flex>
          </Flex>
        </SliderControls>
      </Box>
    </Box>
  );
};

export { Slider, CONTENT_WIDTH, CONTENT_GAP };
