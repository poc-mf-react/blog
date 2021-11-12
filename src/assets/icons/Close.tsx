import React from 'react';

const Close = ({ ...props }: React.HTMLAttributes<SVGElement>): JSX.Element => {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 7l10 10M17 7L7 17"
        stroke="#1F2D27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { Close };
