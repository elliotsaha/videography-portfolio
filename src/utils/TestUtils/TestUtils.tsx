import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalTheme } from '@/utils/UI';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';

export const mountWithTheme = (children: JSX.Element): ReactWrapper =>
  mount(<ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>);

export const shallowWithTheme = (children: JSX.Element): ShallowWrapper =>
  shallow(<ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>);

// ex. rgb(255, 255, 255, 0) -> rgb(255,255,255,0)
export const compressString = (input: string): string =>
  input.replace(/ /g, '');
