import React from 'react';
import styled from 'styled-components';
import {
  grid,
  space,
  layout,
  LayoutProps,
  SpaceProps,
  GridProps as SystemGridProps,
} from 'styled-system';

type HTMLBase = React.HTMLAttributes<HTMLDivElement>;

export interface GridProps
  extends HTMLBase,
    SystemGridProps,
    SpaceProps,
    LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const GridStyle = styled.div`
  display: grid;
  ${grid};
  ${space};
  ${layout};
`;

const Grid = React.forwardRef(
  (props: GridProps, ref: React.Ref<HTMLDivElement>): JSX.Element => (
    <GridStyle ref={ref} {...props} />
  ),
);

Grid.displayName = 'Grid';
export default Grid;
