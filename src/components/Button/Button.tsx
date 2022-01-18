import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { GlobalTheme } from '@/utils/UI';
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
  size?: 'sm' | 'md' | 'lg' | 'max';
  pill?: boolean;
  children?: React.ReactNode;
}

const ButtonRoot = styled.button<ButtonProps>`
  border: none;
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
        fontSize: '1',
        p: '0.5rem',
        pr: '0.6rem',
        pl: '0.6rem',
      },
      md: {
        fontSize: '2',
        p: '0.75rem',
        pr: '1.1rem',
        pl: '1.1rem',
      },
      lg: {
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
        color: 'white',
        border: '0',
        borderColor: 'primary',
        '&:hover': {
          bg: darken(0.04, GlobalTheme.colors.primary),
          borderColor: darken(0.04, GlobalTheme.colors.primary),
        },
        '&:active': {
          bg: darken(0.06, GlobalTheme.colors.primary),
          borderColor: darken(0.06, GlobalTheme.colors.primary),
        },
      },
      outline: {
        bg: 'transparent',
        color: 'primary',
        border: '0',
        borderColor: 'primary',
        '&:hover': {
          color: darken(0.04, GlobalTheme.colors.primary),
          borderColor: darken(0.04, GlobalTheme.colors.primary),
        },
        '&:active': {
          color: darken(0.06, GlobalTheme.colors.primary),
          borderColor: darken(0.06, GlobalTheme.colors.primary),
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
