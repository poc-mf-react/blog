import React from 'react';

const ArrowRight = ({
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 12H5M14 17l5-5M14 7l5 5"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { ArrowRight };
