import * as React from 'react';

const Speedometer = ({
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.4854 7.51468C25.5997 8.62899 26.4836 9.95187 27.0867 11.4078C27.6898 12.8637 28.0001 14.4241 28.0001 16C28.0001 17.5759 27.6898 19.1363 27.0867 20.5922C26.4836 22.0482 25.5997 23.371 24.4854 24.4853C23.3711 25.5997 22.0482 26.4836 20.5923 27.0866C19.1364 27.6897 17.5759 28.0001 16.0001 28.0001C14.4242 28.0001 12.8638 27.6897 11.4078 27.0866C9.95193 26.4836 8.62905 25.5997 7.51474 24.4853C5.26429 22.2349 4 19.1826 4 16C4 12.8174 5.26429 9.76513 7.51474 7.51468C9.76519 5.26423 12.8175 3.99994 16.0001 3.99994C19.1827 3.99994 22.235 5.26423 24.4854 7.51468"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.2172 25.3747C22.981 24.7803 22.6148 24.2464 22.1452 23.812C21.3537 23.0759 20.3128 22.6668 19.2319 22.6667H12.7679C11.9089 22.6682 11.0701 22.927 10.3595 23.4097C9.64899 23.8923 9.09927 24.5767 8.78125 25.3747"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.8854 14.1147C18.1401 14.3606 18.3433 14.6549 18.483 14.9802C18.6228 15.3056 18.6964 15.6555 18.6994 16.0096C18.7025 16.3637 18.6351 16.7148 18.501 17.0425C18.3669 17.3703 18.1689 17.668 17.9185 17.9184C17.6681 18.1688 17.3704 18.3668 17.0427 18.5008C16.7149 18.6349 16.3638 18.7024 16.0097 18.6993C15.6556 18.6962 15.3057 18.6227 14.9804 18.4829C14.655 18.3432 14.3608 18.14 14.1148 17.8853C13.629 17.3824 13.3602 16.7088 13.3663 16.0096C13.3724 15.3104 13.6528 14.6416 14.1473 14.1471C14.6417 13.6527 15.3105 13.3723 16.0097 13.3662C16.7089 13.3601 17.3825 13.6289 17.8854 14.1147"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 4V6.66667"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.9998 5.61334L20.8398 7.61334"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 5.61334L11.16 7.61334"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.61328 10L7.61328 11.16"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 16H26"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 16H4"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3867 14.84L26.3867 10"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Speedometer };
