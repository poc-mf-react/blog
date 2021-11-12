import { styled, css } from '@creditas-ui/system';
import { selectTheme, ifProp } from '@creditas-ui/utilities';
import { ButtonProps } from './Button';

const base = (props: any): any => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  overflow: hidden;
  width: 60px;
  height: 60px;
  background-color: ${selectTheme('colors.neutral.15')(props)};
  border-radius: 100%;
`;

const hover = (props: any): any => css`
  &:hover {
    background-color: ${selectTheme('colors.primary.40')(props)};
  }

  &:focus {
    outline: none;
    background-color: ${selectTheme('colors.primary.40')(props)};
  }
`;

const disabled = (props: any): any => css`
  &:disabled {
    cursor: not-allowed;
    background-color: ${selectTheme('colors.neutral.15')(props)};
  }

  & > svg {
    stroke: ${selectTheme('colors.neutral.40')(props)};
  }
`;

const pressedBase = (props: any): any => css`
  &::after {
    display: none;
    content: '';
    position: absolute;
    border-radius: 50%;
    background-color: ${selectTheme('colors.neutral.90')(props)};

    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;

    top: 50%;
    left: 50%;

    animation: ripple 1s;
    opacity: 0;
  }

  &:focus:not(:active)::after {
    display: block;
  }

  @keyframes ripple {
    from {
      opacity: 0.1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(10);
    }
  }
`;

const left = (): any => css`
  & > svg {
    transform: rotate(180deg);
  }
`;

const Button = styled.button<ButtonProps>`
  ${base}
  ${hover}
  ${disabled}
  ${pressedBase}
  ${ifProp({ arrow: 'left' }, left)}
`;

export { Button };
