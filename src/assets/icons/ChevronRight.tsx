import * as React from 'react';

const ChevronRight = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.334 21.333L18.667 16l-5.333-5.333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ChevronRight };
