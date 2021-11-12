import * as React from 'react';

const Speedometer = ({
  ...props
}: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.485 7.515A12.001 12.001 0 117.513 24.487 12.001 12.001 0 0124.485 7.515"
        stroke="#1F2D27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.218 25.376a4.284 4.284 0 00-1.073-1.563 4.278 4.278 0 00-2.913-1.145h-6.464a4.3 4.3 0 00-3.987 2.708M17.885 14.116a2.665 2.665 0 01-.842 4.386 2.666 2.666 0 11.842-4.386M16 4v2.667M22 5.613l-1.16 2M10 5.613l1.16 2M5.614 10l2 1.16M28 16h-2M6 16H4M18.387 14.84l8-4.84"
        stroke="#1F2D27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { Speedometer };
