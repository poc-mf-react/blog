import React from 'react';

interface ChevronDownBaseProps {
  active: boolean;
}

type ChevronDownProps = ChevronDownBaseProps & React.HTMLAttributes<SVGElement>;

const ChevronDown = ({ active, ...props }: ChevronDownProps): JSX.Element => {
  return (
    <svg
      width={10}
      height={6}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 5l4-4 4 4"
        stroke="#1F2D27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ChevronDown };
