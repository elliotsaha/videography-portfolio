import React from 'react';
import styled from 'styled-components';
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  grid,
  GridProps,
} from 'styled-system';

type HTMLBase = React.HTMLAttributes<HTMLDivElement>;
type ModifiedHTMLBase = Omit<HTMLBase, 'color'>; // ColorProps already has this
export interface BoxProps
  extends ModifiedHTMLBase,
    ColorProps,
    SpaceProps,
    LayoutProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    GridProps {
  color?: string;
  as?: React.ElementType | string;
  className?: string;
}

// Add mostly all props from styled-system
const BoxStyle = styled.div<BoxProps>`
  ${color}
  ${space};
  ${layout};
  ${border};
  ${background};
  ${position};
  ${shadow};
  ${grid};
`;

const Box = React.forwardRef(
  (props: BoxProps, ref: React.Ref<HTMLDivElement>): JSX.Element => (
    <BoxStyle ref={ref} {...props} />
  ),
);

Box.displayName = 'Box';
export default Box;
