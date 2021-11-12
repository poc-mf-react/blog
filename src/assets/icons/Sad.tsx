import * as React from 'react';

const Sad = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      data-testid="icon-sad"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M70 40c0-16.54-13.46-30-30-30-16.543 0-30 13.457-30 30M40 70c16.543 0 30-13.46 30-30M10 40c0 16.543 13.457 30 30 30"
        stroke="#1F2D27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.093 31.733A.833.833 0 1051.1 33.4a.833.833 0 00-.007-1.667M28.797 31.667a.833.833 0 10.007 1.667.833.833 0 00-.007-1.667M28.333 53.333S32.71 48.96 40 48.96c7.293 0 11.667 4.373 11.667 4.373"
        stroke="#1F2D27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { Sad };
