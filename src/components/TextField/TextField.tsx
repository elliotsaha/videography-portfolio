import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps, layout, LayoutProps } from 'styled-system';
import css from '@styled-system/css';

type HTMLBase = React.InputHTMLAttributes<HTMLInputElement>;
type ModifiedHTMLBase = Omit<HTMLBase, 'width' | 'size' | 'height'>;

export interface TextFieldProps
  extends ModifiedHTMLBase,
    SpaceProps,
    LayoutProps {
  rows?: number;
  children?: string;
  as?: React.ElementType | string;
}

const TextFieldRoot = styled.input<any>`
  background: transparent;
  border: 0;
  color: white;
  outline: none;
  ${css({
    borderRadius: '0',
    fontFamily: 'body',
    border: '0',
    borderColor: 'white',
  })}
  padding: 0.85rem;
  &:focus {
    ${css({
      boxShadow: 'focus',
    })}
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    ${css({
      color: 'lightGrey',
    })}
  }
  :-ms-input-placeholder {
    ${css({
      color: 'lightGrey',
    })}
  }
  ${space}
  ${layout}
`;

const TextField = React.forwardRef(
  (props: TextFieldProps, ref: React.Ref<HTMLInputElement>): JSX.Element => {
    const { rows, children, as, ...other } = props;

    return (
      <TextFieldRoot ref={ref} rows={rows} as={as} {...other}>
        {children}
      </TextFieldRoot>
    );
  },
);

TextField.displayName = 'TextField';
export default TextField;
