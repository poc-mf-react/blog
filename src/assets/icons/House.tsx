import * as React from 'react';

const House = ({ ...props }: React.HTMLAttributes<SVGElement>): JSX.Element => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.6665 14.0613V27.9999"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.3332 16L16.8332 6.91331C16.6057 6.74859 16.332 6.65991 16.0512 6.65991C15.7703 6.65991 15.4966 6.74859 15.2692 6.91331L2.6665 16"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.9998 12.9907V6.00004C25.9998 5.82323 25.9296 5.65366 25.8046 5.52864C25.6796 5.40361 25.51 5.33337 25.3332 5.33337H21.3332C21.1564 5.33337 20.9868 5.40361 20.8618 5.52864C20.7367 5.65366 20.6665 5.82323 20.6665 6.00004V9.47871"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.3332 28H2.6665"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.3335 14.0774V28.0001"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.6667 20H18.6667C18.2985 20 18 20.2985 18 20.6667V23.3333C18 23.7015 18.2985 24 18.6667 24H22.6667C23.0349 24 23.3333 23.7015 23.3333 23.3333V20.6667C23.3333 20.2985 23.0349 20 22.6667 20Z"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.3335 28V20.6667C9.3335 20.4899 9.40373 20.3203 9.52876 20.1953C9.65378 20.0702 9.82335 20 10.0002 20H13.3335C13.5103 20 13.6799 20.0702 13.8049 20.1953C13.9299 20.3203 14.0002 20.4899 14.0002 20.6667V28"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { House };
