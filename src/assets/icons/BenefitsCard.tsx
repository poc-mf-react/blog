import React from 'react';

const BenefitsCard = ({
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.734 12.933l-.706-2.672a2.665 2.665 0 011.888-3.27l13.39-3.568a2.677 2.677 0 013.262 1.882l2.339 8.679a2.668 2.668 0 01-1.888 3.27l-2.819.751"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 27.333H6.667A2.667 2.667 0 014 24.667v-8.983a2.666 2.666 0 012.667-2.667h13.866a2.666 2.666 0 012.667 2.667v4.491M21.205 23.735l-2.335 2.336-1.401-1.401"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M13.664 25.646l.797 1.043.173 1.298c.096.72.662 1.287 1.382 1.383l1.301.174 1.042.797c.577.44 1.377.44 1.954 0l1.043-.797h-.001l1.299-.173a1.609 1.609 0 001.383-1.382l.174-1.301.797-1.042c.44-.576.44-1.377 0-1.954l-.797-1.043-.173-1.298a1.609 1.609 0 00-1.382-1.383l-1.301-.174-1.042-.797a1.608 1.608 0 00-1.954 0l-1.043.797h.001l-1.299.173a1.609 1.609 0 00-1.383 1.382l-.174 1.301-.797 1.043a1.608 1.608 0 000 1.953z"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { BenefitsCard };
