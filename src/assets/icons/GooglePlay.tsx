import React from 'react';

const GooglePlay = ({
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.747 16c.066-.022.132-.055.21-.099l9.659-5.278-2.291-2.288L1.747 16zm10.287-5.608l-2.39-2.376 2.39-2.408 3.283 1.793c.804.44.396.99 0 1.21l-3.283 1.78zm-.43-5.026L1.957.11A1.13 1.13 0 001.615 0l7.699 7.676 2.29-2.31zM1.054.1l7.942 7.917L1.086 16c-.231-.143-.352-.462-.352-.869 0-.78-.066-13.229-.066-14.163C.656.506.822.23 1.053.099z"
        fill="#1F2D27"
      />
    </svg>
  );
};

export { GooglePlay };
