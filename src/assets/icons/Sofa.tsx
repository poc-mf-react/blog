import * as React from 'react';

const Sofa = ({ ...props }: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 18.67H8v-3.334a2 2 0 00-2-2H4.667a2 2 0 00-2 2v6a2.667 2.667 0 002.666 2.667h21.334a2.667 2.667 0 002.666-2.667v-6a2 2 0 00-2-2H26a2 2 0 00-2 2v3.333zM6.667 24v2.667M25.334 24v2.667M5.333 13.335v-2.667a4 4 0 014-4h13.334a4 4 0 014 4v2.667"
        stroke="#1F2D27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { Sofa };
