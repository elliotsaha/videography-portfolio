import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  variant as systemVariant,
} from 'styled-system';

type HTMLBase = React.HTMLAttributes<HTMLHeadingElement>;
type ModifiedHTMLBase = Omit<HTMLBase, 'color'>; // ColorProps already has this

export interface HeaderProps
  extends ModifiedHTMLBase,
    SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps {
  children?: React.ReactNode;
  as?: React.ElementType | string;
  // used for styling as another heading element. e.g. h1 element in dom styled as an h3 element
  render?: React.ElementType | string;
}

const renderVariant = (propertyName: string) =>
  systemVariant({
    prop: propertyName,
    variants: {
      h1: {
        fontSize: '4.209rem',
      },
      h2: {
        fontSize: '3.157rem',
      },
      h3: {
        fontSize: '2.369rem',
      },
      h4: {
        fontSize: '1.777rem',
      },
      h5: {
        fontSize: '1rem',
      },
      h6: {
        fontSize: '0.75rem',
      },
    },
  });

const HeaderRoot = styled.h1<HeaderProps>`
  ${css({
    fontFamily: 'title',
  })}
  ${renderVariant('as')}
  ${renderVariant('render')}
  ${space}
  ${typography}
  ${layout}
  ${color}
`;

const Header = React.forwardRef(
  (props: HeaderProps, ref: React.Ref<HTMLHeadingElement>): JSX.Element => {
    const { children, as = 'h1', ...other } = props;
    return (
      <HeaderRoot ref={ref} as={as} {...other}>
        {children}
      </HeaderRoot>
    );
  },
);

export default Header;
Header.displayName = 'Header';
