import React from 'react';

const MenuMobile = ({
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element => {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 9h20M2 15h14" stroke="#141414" strokeLinecap="round" />
    </svg>
  );
};

export { MenuMobile };
