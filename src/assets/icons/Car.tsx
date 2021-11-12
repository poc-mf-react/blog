import * as React from 'react';

const Car = ({ ...props }: React.HTMLAttributes<SVGElement>): JSX.Element => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29.3332 12L25.8398 13.3333"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.17317 13.3333L2.6665 12"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.3333 18.6666H21"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.9998 18.6666H7.6665"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.8383 13.3333L24.7196 7.98398C24.5626 7.23458 24.1524 6.56206 23.558 6.07938C22.9637 5.5967 22.2213 5.33326 21.4556 5.33331H10.6823C9.93021 5.33343 9.20027 5.58787 8.61109 6.05529C8.02191 6.52272 7.60812 7.17564 7.43695 7.90798L6.16895 13.3333"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.33317 26.6666H7.33317C7.8636 26.6666 8.37231 26.4559 8.74738 26.0809C9.12246 25.7058 9.33317 25.1971 9.33317 24.6666V23.3333H22.6665V24.6666C22.6665 25.1971 22.8772 25.7058 23.2523 26.0809C23.6274 26.4559 24.1361 26.6666 24.6665 26.6666H27.6665C28.5865 26.6666 29.3332 25.92 29.3332 25V17.3333C29.3332 16.2724 28.9117 15.255 28.1616 14.5049C27.4115 13.7547 26.394 13.3333 25.3332 13.3333H6.6665C5.60564 13.3333 4.58822 13.7547 3.83808 14.5049C3.08793 15.255 2.6665 16.2724 2.6665 17.3333V25C2.6665 25.92 3.41317 26.6666 4.33317 26.6666Z"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Car };
