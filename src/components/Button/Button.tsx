import React from 'react';
import styled from 'styled-components';
import { contrastText, darkenColor } from '@/utils/ColorManipulation';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  variant as systemVariant,
} from 'styled-system';

type HTMLBase = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps
  extends HTMLBase,
    SpaceProps,
    LayoutProps,
    TypographyProps {
  variant?: 'solid' | 'outline' | 'text';
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'max';
  pill?: boolean;
  children?: React.ReactNode;
}

const ButtonRoot = styled.button<ButtonProps>`
  border: none;
  height: 3.25rem;
  width: auto;
  font-family: ${({ theme }) => theme.fonts.title};
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  border-radius: ${(props) =>
    props.pill ? props.theme.radii[3] : props.theme.radii[0]};
  ${({ theme }) => theme.transition};
  &:hover: {
    ${({ theme }) => theme.transition};
  }

  ${systemVariant({
    prop: 'size',
    variants: {
      sm: {
        height: '2.15rem',
        fontSize: '1',
        p: '0.5rem',
        pr: '0.6rem',
        pl: '0.6rem',
      },
      md: {
        height: '2.75rem',
        fontSize: '2',
        p: '0.75rem',
        pr: '1.1rem',
        pl: '1.1rem',
      },
      lg: {
        height: '3.5rem',
        fontSize: '3',
        p: '1rem',
        pr: '1.5rem',
        pl: '1.5rem',
      },
    },
  })};

  ${systemVariant({
    variants: {
      solid: {
        bg: 'primary',
        color: contrastText('primary', true),
        border: '0',
        borderColor: 'primary',
        '&:hover': {
          bg: darkenColor('primary', 0.2, true),
          borderColor: darkenColor('primary', 0.2, true),
        },
        '&:active': {
          bg: darkenColor('primary', 0.3, true),
          borderColor: darkenColor('primary', 0.3, true),
        },
      },
      outline: {
        bg: 'transparent',
        color: 'primary',
        border: '0',
        borderColor: 'primary',
        '&:hover': {
          color: darkenColor('primary', 0.15, true),
          borderColor: darkenColor('primary', 0.15, true),
        },
        '&:active': {
          color: darkenColor('primary', 0.25, true),
          borderColor: darkenColor('primary', 0.25, true),
        },
      },
    },
  })};
  ${space};
  ${layout};
  ${typography}
`;

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>): JSX.Element => {
    const {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      pill = false,
      children,
      ...other
    } = props;

    return (
      <ButtonRoot
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        pill={pill}
        {...other}
      >
        {children}
      </ButtonRoot>
    );
  },
);

Button.displayName = 'Button';
export default Button;
