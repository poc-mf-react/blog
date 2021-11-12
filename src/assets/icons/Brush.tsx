import * as React from 'react';

const Brush = ({ ...props }: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.307 15.773h17.386M22.023 21.379H9.977a2.667 2.667 0 01-2.666-2.667V5.333A1.333 1.333 0 018.644 4h14.712a1.333 1.333 0 011.333 1.333v13.379a2.667 2.667 0 01-2.666 2.667zM18.97 21.379v5.288a2.667 2.667 0 01-2.667 2.667h-.604a2.667 2.667 0 01-2.667-2.667v-5.288"
        stroke="#1F2D27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { Brush };
