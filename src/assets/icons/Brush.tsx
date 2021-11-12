import * as React from 'react';

const Brush = ({ ...props }: React.HTMLAttributes<SVGElement>): JSX.Element => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.30664 15.7733H24.6933"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.0225 21.3787H9.97721C9.26997 21.3787 8.59169 21.0977 8.0916 20.5976C7.5915 20.0975 7.31055 19.4192 7.31055 18.712V5.33333C7.31055 4.97971 7.45102 4.64057 7.70107 4.39052C7.95112 4.14048 8.29026 4 8.64388 4H23.3559C23.7095 4 24.0486 4.14048 24.2987 4.39052C24.5487 4.64057 24.6892 4.97971 24.6892 5.33333V18.712C24.6892 19.4192 24.4083 20.0975 23.9082 20.5976C23.4081 21.0977 22.7298 21.3787 22.0225 21.3787Z"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.9696 21.3787V26.6667C18.9696 27.3739 18.6886 28.0522 18.1885 28.5523C17.6884 29.0524 17.0101 29.3333 16.3029 29.3333H15.6989C14.9916 29.3333 14.3134 29.0524 13.8133 28.5523C13.3132 28.0522 13.0322 27.3739 13.0322 26.6667V21.3787"
      stroke="#1F2D27"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Brush };
