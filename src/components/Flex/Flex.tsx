import React from 'react';
import styled from 'styled-components';
import {
  flexbox,
  space,
  layout,
  color,
  border,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  ColorProps,
  BorderProps,
} from 'styled-system';

type HTMLBase = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>;

export interface FlexProps
  extends HTMLBase,
    FlexboxProps,
    SpaceProps,
    LayoutProps,
    Omit<ColorProps, 'color'>,
    BorderProps {
  children?: React.ReactNode;
  className?: string;
  color?: string;
}

const FlexStyle = styled.div`
  display: flex;
  ${flexbox};
  ${space};
  ${layout};
  ${color};
  ${border};
`;

const Flex = React.forwardRef(
  (props: FlexProps, ref: React.Ref<HTMLDivElement>): JSX.Element => (
    <FlexStyle ref={ref} {...props} />
  ),
);

Flex.displayName = 'Flex';
export default Flex;
