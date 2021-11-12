import * as React from 'react';
import { Box, BoxProps } from '@creditas-ui/layout';
import { Filled } from './ProgressBar.style';

export type ProgressBarProps = BoxProps & {
  size: number;
  filled: number;
};

const ProgressBar = ({
  size = 0,
  filled = 0,
}: ProgressBarProps): JSX.Element => {
  const getFilled = React.useCallback(() => {
    const minFill = filled <= 0 ? 1 : filled;
    const maxFill = filled > size ? size : minFill;

    return maxFill;
  }, [size, filled]);

  const filledPercent = React.useMemo(
    () => (getFilled() * 100) / size,
    [getFilled, size]
  );

  return (
    <Box data-testid="progress-bar" bg="neutral.15" width="100%" height="1px">
      <Filled
        data-testid="progress-bar-filled"
        bg="neutral.90"
        width={`${filledPercent}%`}
        height="100%"
      />
    </Box>
  );
};

export { ProgressBar };
