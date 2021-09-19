import React from 'react';
import styled from 'styled-components';
import {
  flexbox,
  space,
  layout,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
} from 'styled-system';

type HTMLBase = React.HTMLAttributes<HTMLDivElement>;

export interface FlexProps
  extends HTMLBase,
    FlexboxProps,
    SpaceProps,
    LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const FlexStyle = styled.div`
  display: flex;
  ${flexbox};
  ${space};
  ${layout};
`;

const Flex = React.forwardRef(
  (props: FlexProps, ref: React.Ref<HTMLDivElement>): JSX.Element => (
    <FlexStyle ref={ref} {...props} />
  ),
);

Flex.displayName = 'Flex';
export default Flex;
