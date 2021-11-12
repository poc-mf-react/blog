import * as React from 'react';

const ArrowLeft = (props: React.HTMLAttributes<SVGElement>): JSX.Element => (
  <svg
    width={20}
    height={16}
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.98 15.02a.5.5 0 10.707-.707L1.873 8.5h17.46a.5.5 0 000-1H1.873l5.814-5.813A.5.5 0 006.979.98L.313 7.646a.498.498 0 00-.109.163l-.001.003A.486.486 0 00.166 8a.499.499 0 00.147.354l6.666 6.666z"
      fill="#1F2D27"
    />
  </svg>
);

export { ArrowLeft };
